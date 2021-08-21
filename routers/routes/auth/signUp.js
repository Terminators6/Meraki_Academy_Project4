const express = require("express");
//controllers

const { createNewUser } = require("../../controllers/auth/signUp");

const registerRouter = express.Router();

registerRouter.post("/register", createNewUser);

module.exports = registerRouter;
