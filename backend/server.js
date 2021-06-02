const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;
app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});
