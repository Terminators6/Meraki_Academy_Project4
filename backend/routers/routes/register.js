const express = require('express');
//controllers
const { createNewUser } = require('./../controllers/register')

const registerRouter = express.Router();


registerRouter.post('/register', createNewUser)

module.exports = registerRouter;