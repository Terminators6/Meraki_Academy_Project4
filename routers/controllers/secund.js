const supServiceModel = require("./../../db/models/supService");

const getBusiness = (req, res) => {
  supServiceModel
    .find({ type: "business" })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

const getProgramming = (req, res) => {
  supServiceModel
    .find({ type: "programming" })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

const getFinance = (req, res) => {
  supServiceModel
    .find({ type: "finance" })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

const getCourses = (req, res) => {
  supServiceModel
    .find({ type: "courses" })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

const getMarketing = (req, res) => {
  supServiceModel
    .find({ type: "marketing" })
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
  getBusiness,
  getProgramming,
  getFinance,
  getCourses,
  getMarketing,
};
