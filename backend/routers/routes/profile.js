const express = require("express");

const { getAllUsers, getProfileById, deleteProfileById, updateProfileById } = require("./../controllers/profile");

const profileRouter = express.Router();

profileRouter.get("/", getAllUsers);

profileRouter.get("/:id", getProfileById);

profileRouter.delete("/:id", deleteProfileById);

profileRouter.put("/:id", updateProfileById);

module.exports = profileRouter;
