const usersModel = require("./../../../db/models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  const { email, password } = req.body;
  email = email.toLowerCase();
  usersModel.findOne({ email: email }).then((result) => {
    if (!result) {
      res.status(404).json("this email doesn't exist");
    }
  });
};
