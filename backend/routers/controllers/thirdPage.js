const { model } = require("mongoose");
const supServiceModel = require("./../../db/models/supService");

const service = (req, res) => {
  const id = req.params;
  supServiceModel
    .findOne({ _id: id.id })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

module.exports = {
  service,
};
