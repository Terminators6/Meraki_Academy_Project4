const express = require('express');
const { createNewComment } = require('./../controllers/comment');


const commentRouter = express.Router();

commentRouter.post("/subService/:id/comment",createNewComment);


module.exports = commentRouter;