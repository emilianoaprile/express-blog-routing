const express = require("express");
const router = express.Router();
const blogController = require("../controllers/BlogController.js");

router.get("/", blogController.index);
router.get("/:slug", blogController.show);

module.exports = router;