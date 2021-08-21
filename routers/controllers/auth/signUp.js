const usersModel = require("./../../../db/models/user");

const createNewUser = (req, res) => {
  console.log("....REFACTOR...........create new user");
  const { firstName, lastName, age, country, email, password, role, image } = req.body;

  const user = new usersModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role,
    image,
  });

  console.log("....REFACTOR...........create new user", user);
  user
    .save()
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  createNewUser,
};
