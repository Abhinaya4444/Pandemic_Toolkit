const express = require("express");
const router = express.Router();
const controller = require("../controllers/helpController");

router.post("/help", controller.addHelp);
router.get("/help", controller.getHelp);

module.exports = router;
