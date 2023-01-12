const router = require("express").Router();
//this files consist of all endpoints for my handlers
const {
  getAdds,
  getAdd,
  addNewAdd,
  updateAdd,
  deleteAdd,
} = require("../handlers/addsHandlers");

router.get("/api/adds", (req, res) => getAdds(req, res));

router.get("/api/add/:add", (req, res) => getAdd(req, res));

router.post("/api/add/add", (req, res) => addNewAdd(req, res));

router.put("/api/update", (req, res) => updateAdd(req, res));

router.delete("/api/delete", (req, res) => deleteAdd(req, res));

module.exports = router;
