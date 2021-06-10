const express = require("express");

const { favButton } = require("./../controllers/favorite");

const favoriteRouter = express.Router();

// favoriteRouter.post("/favorite", favButton);

module.exports = favoriteRouter;
