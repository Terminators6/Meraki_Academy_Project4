const express = require('express');
const authentication = require('../middlewares/authentication');
const { createNewComment } = require('./../controllers/comment');


const commentRouter = express.Router();

commentRouter.post("/subService/:id/comment", authentication,createNewComment);


module.exports = commentRouter;