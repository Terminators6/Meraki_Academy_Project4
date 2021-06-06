const supServiceModel = require("./../../db/models/supService");

const getBusiness = (req, res) => {
  supServiceModel
    .find({ type: "business" }, "image title rating")
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
    .find({ type: "programming" }, "image title rating")
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
    .find({ type: "finance" }, "image title rating")
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
    .find({ type: "courses" }, "image title rating")
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
    .find({ type: "marketing" }, "image title rating")
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
