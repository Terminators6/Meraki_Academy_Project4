const usersModel = require("./../../../db/models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { model } = require("mongoose");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await usersModel.findOne({ email: email });
    if (!result) {
      return res.status(404).json("this email doesn't exist");
    }
    const compare = await bcrypt.compare(password, result.password);
    if (!compare) return res.status(403).json("The password you’ve entered is incorrect");
    const payload = {
      userId: result._id,
      firsName: result.firsName,
      role: result.role,
    };
    const options = {
      expiresIn: "2h",
    };
    const secret = process.env.SECRET;
    const token = jwt.sign(payload, secret, options);
    res.status(200).json(token);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  login,
};
