const User = require("./../../db/models/user");
const supServiceModule = require("./../../db/models/supService");

const favorite = async (req, res) => {
  const id = req.params;
  try {
    const FAV = await User.findOne({ _id: id }, "favorite");
    return res.status(200).json(FAV);
  } catch (err) {
    return res.status(404).json(err);
  }
};
/*
const favButton = async (req, res) => {
  const serviceId = req.params;
  const userId = req.body.id;

  const a = await User.findOne({ _id: userId }, "favorite");
  let b = a.favorite;
  let c = b.filter((ele, i) => {
    return ele === serviceId;
  });
  if (c.length > 0) {
    const user = await User.findOneAndUpdate({ _id: userId }, { favorite: { $push: { serviceId } } });
    res.json(user);
  } else {
    return;
  }
};
*/
module.exports = {
  favorite,
};
