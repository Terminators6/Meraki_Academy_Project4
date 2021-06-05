
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');
const app = express();
require("dotenv").config();

//routers
const registerRouter = require('./routers/routes/auth/signUp')
const profileRouter =require('./routers/routes/profile')


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

app.use(registerRouter);
app.use('/profile',profileRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);


});

