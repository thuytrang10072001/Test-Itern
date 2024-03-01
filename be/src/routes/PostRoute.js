const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.get("/list", PostController.getList);
router.get("/:id/comments", PostController.getCmt);
module.exports = router;
