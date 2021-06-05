const express = require("express");

const { favorite } = require("./../controllers/favorite");

const favoriteRouter = express.Router();

favoriteRouter.get("/favorite/:id", favorite);

module.exports = favoriteRouter;
