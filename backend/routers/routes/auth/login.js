const express = require("express");
const { model } = require("mongoose");

const { login } = require("../../controllers/auth/login");

const loginRouter = express.Router();

loginRouter.post("/login", login);

module.exports = loginRouter;
