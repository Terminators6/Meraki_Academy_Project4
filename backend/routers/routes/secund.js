const express = require("express");
//controllers
const { getBusiness, getProgramming, getFinance, getCourses, getMarketing } = require("./../controllers/secund");

const supRouter = express.Router();

supRouter.get("/sup/business", getBusiness);
supRouter.get("/sup/programming", getProgramming);
supRouter.get("/sup/finance", getFinance);
supRouter.get("/sup/courses", getCourses);
supRouter.get("/sup/marketing", getMarketing);

module.exports = supRouter;
