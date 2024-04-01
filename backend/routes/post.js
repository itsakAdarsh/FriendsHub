import express from "express";
import PostController from "../controllers/PostController.js";

const router = express.Router();

router.post("/createPost", PostController.createPost);
router.get("/getPosts", PostController.getPosts);
router.get("/getPost/:postId", PostController.getPost);

export default router;
