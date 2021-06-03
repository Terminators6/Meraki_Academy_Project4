const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  Comment: { type: String },
  Commenter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Comment", commentSchema);
