const mongoose = require("mongoose");

const supService = new mongoose.Schema({
  name: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String },
  rating: { type: Number },
  numberOfVoters: { type: Number },
  image: { type: String },
  comments: { type: Schema.Types.ObjectId, ref: "Comment" }
});

module.exports = mongoose.model("SupService", supService);
