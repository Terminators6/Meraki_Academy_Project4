const express = require("express");

const {
  getAllservice,
  createNewService,
  updateAnServiceById,
  deleteServiceById,
  // deleteServicByAuthor,
} = require("../controllers/service");

const serviceRouter = express.Router();

serviceRouter.get("/", getAllservice);
serviceRouter.post("/newService", createNewService);
serviceRouter.put("/business/:id/update", updateAnArticleById);
serviceRouter.delete("/business/:id/delete", deleteArticleById);

// serviceRouter.delete('/', deleteArticlesByAuthor);

module.exports = serviceRouter;
