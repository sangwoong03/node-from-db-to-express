const express = require("express");
const router = express.Router();

const postController = require("../controllers/postControllers");
const errorHandler = require("../middlewares/errorHandler");

router.get("/:user_id", errorHandler(postController.getPostByUserId));
router.get("/:post_id", errorHandler(postController.getPostByPostId));
router.get("/:_postid", errorHandler(postController.getAllPost));
router.post("/", errorHandler(postController.addPost));
router.delete("/:post_id", errorHandler(postController.deletePost));
router.patch("/:post_id", errorHandler(postController.revisePost));

module.exports = {
	router,
};
