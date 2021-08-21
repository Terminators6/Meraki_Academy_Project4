const express = require("express");

const {
  getAllservice,
  createNewService,
  updateAnServiceById,
  deleteServiceById,
  // deleteServicByAuthor,
} = require("../controllers/service");

const serviceRouter = express.Router();

serviceRouter.get("/allServices", getAllservice);
serviceRouter.post("/newService", createNewService);
serviceRouter.put("/business/:id/update", updateAnServiceById);
serviceRouter.delete("/business/:id/delete", deleteServiceById);

// serviceRouter.delete('/', deleteArticlesByAuthor);

module.exports = serviceRouter;
