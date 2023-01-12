"use strict";
//this file is used only once to batch import data to mongoDB database
const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const adds = require("./data/data.json");

const uploadAdds = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("real_estate");
    await db.collection("adds").insertMany(adds);
  } catch (error) {
    console.log(error);
  }
  client.close();
};
uploadAdds();
