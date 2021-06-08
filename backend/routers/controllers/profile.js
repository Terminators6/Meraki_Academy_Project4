const User = require("./../../db/models/user");

//get all user it is useful for admin to manage all user
const getAllUsers = (req, res) => {
  console.log(".....get All users");
  User.find({}, "firstName lastName age country email ")
    .then((result) => {
      console.log("........getAllUsers......", result);
      res.status(200);
      res.send(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
//get use Profile by userId
const getProfileById = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((result) => {
      if (result) {
        console.log("....getProfileById...", result);
        res.status(200);
        res.json(result);
      } else {
        res.status(404);
        res.json("Not Found");
      }
    })
    .catch((err) => {
      res.json(err);
    });
};
// delete user Profile by userId
const deleteProfileById = (req, res) => {
  const id = req.params.id;
  console.log("....deleteProfileById...");
  User.findByIdAndDelete({ _id: id })
    .then((result) => {
      console.log("....deleteProfileById...", result);
      if (result) {
        res.status(202).json({
          success: true,
          message: `Success Delete user Profile with id = ${id}`,
        });
      } else {
        res.status(404);
        res.json("Not Found");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
//update user Profile by userId
const updateProfileById = (req, res) => {
  console.log("....updateProfileById...");
  User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) => {
      res.status(204);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  getAllUsers,
  getProfileById,
  deleteProfileById,
  updateProfileById,
};
