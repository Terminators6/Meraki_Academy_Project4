const User = require("./../../db/models/user");
const supServiceModule = require("./../../db/models/supService");

const favorite = async (req, res) => {
  const id = req.params;
  try {
    const FAV = await User.findOne({ _id: id }, "favorite");
    let arrayOfFav = FAV.favorite;
    let fav = arrayOfFav.map(async (ele, i) => {
      return await supServiceModule.findOne({ _id: ele }, "title type rating image");
    });
    return res.status(200).json(fav);
  } catch (err) {
    return res.status(404).json(err);
  }
};

module.exports = {
  favorite,
};
