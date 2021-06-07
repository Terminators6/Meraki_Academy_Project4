const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db");
const app = express();

//routers
const profileRouter = require("./routers/routes/profile");
const registerRouter = require("./routers/routes/auth/signUp");
const supRouter = require("./routers/routes/secund");
const loginRouter = require("./routers/routes/auth/login");
const commentRouter = require("./routers/routes/comment");
const favoriteRouter = require("./routers/routes/favorite");

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(registerRouter);
app.use(commentRouter);
app.use("/profile", profileRouter);
app.use(supRouter);
app.use(loginRouter);
app.use(favoriteRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
