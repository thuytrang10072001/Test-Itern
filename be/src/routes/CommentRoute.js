const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

router.post("/:id", CommentController.getCmt);

module.exports = router;
