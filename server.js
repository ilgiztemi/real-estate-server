"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

const PORT = 8000;

express()
  //default
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  .use(require("./endpoints/addsEndpoints"))

  // Node spins up our server and sets it to listen on set port
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
