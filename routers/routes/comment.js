const express = require("express");
const { createNewComment } = require("./../controllers/comment");
const { getCommints } = require("./../controllers/comment");

const commentRouter = express.Router();

commentRouter.post("/subService/:id/comment", createNewComment);
commentRouter.post("/getcomments", getCommints);

module.exports = commentRouter;
