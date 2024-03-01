const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/list", UserController.getList);
router.post("/:id", UserController.getUser);

module.exports = router;
