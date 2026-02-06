const express = require("express");
const router = express.Router();
const controller = require("../controllers/storyController");

router.post("/", controller.addStory);
router.get("/", controller.getStories);

module.exports = router;
