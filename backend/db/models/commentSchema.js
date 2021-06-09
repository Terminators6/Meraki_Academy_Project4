const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: { type: String },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceId: { type: String },
});

module.exports = mongoose.model("Comment", commentSchema);
