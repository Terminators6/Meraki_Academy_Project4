const Comment = require("./../../db/models/commentSchema");

const createNewComment = async (req, res) => {
  const { comment, commenter, serviceId } = req.body;

  const newComment = new Comment({ comment, commenter, serviceId });
  newComment
    .save()
    .then((result) => {
      console.log(".........", result.comment);
      res.status(200);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getCommints = async (req, res) => {
  const { comment, commenter, serviceId } = req.body;

  const commints = await Comment.find({ serviceId: serviceId }).populate("commenter", "firstName").exec();
  console.log("commints", commints);
  res.json(commints);
};

module.exports = { createNewComment, getCommints };
