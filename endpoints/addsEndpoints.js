const router = require("express").Router();
//this files consist of all endpoints for my handlers
const {
  getAdds,
  getAdd,
  addNewAdd,
  updateAdd,
  deleteAdd,
} = require("../handlers/addsHandlers");

router.get("/adds", (req, res) => getAdds(req, res));

router.get("/add/:add", (req, res) => getAdd(req, res));

router.post("/add/add", (req, res) => addNewAdd(req, res));

router.put("/update", (req, res) => updateAdd(req, res));

router.delete("/delete", (req, res) => deleteAdd(req, res));

module.exports = router;
