const usersModel = require("./../../db/models/user");

const createNewUser = (req, res) => {
  const { firstName, lastName, age, country, email, password, image, role } = req.body;
  const user = new usersModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    image,
    role,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createNewUser,
};
