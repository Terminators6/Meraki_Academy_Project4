const express = require("express");
const { model } = require("mongoose");

const { service } = require("../controllers/thirdPage");

const servicesRouter = express.Router();

servicesRouter.post("business/:id/", service);
servicesRouter.post("programming/:id/", service);
servicesRouter.post("finance/:id/", service);
servicesRouter.post("courses/:id/", service);
servicesRouter.post("marketing/:id/", service);

module.exports = servicesRouter;
