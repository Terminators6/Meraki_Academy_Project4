const servicemoudule = require("./../../db/models/supService");

const getAllservice = (req, res) => {
  console.log("get all services");
  servicemoudule
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const createNewService = (req, res) => {
  const {
    name,
    title,
    description,
    type,
    rating,
    numberOfVoters,
    image,
    comments,
  } = req.body;

  const service = new servicemoudule({
    name,
    title,
    description,
    type,
    rating,
    numberOfVoters,
    image,
    comments,
  });

  service
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const updateAnServiceById = (req, res) => {
  const id = req.params.id;

  servicemoudule
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const deleteServiceById = (req, res) => {
  const id = req.params.id;

  servicemoudule
    .findByIdAndDelete(id)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Success Delete service with id => ${id}`,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
// const deleteserviceByAuthor = (req, res) => {
// 	const author = req.body.author;

// 	servicemoudule
// 		.deleteMany({ author })
// 		.then((result) => {
// 			res.status(200).json({
// 				success: true,
// 				message: `Success Delete service with id => ${author}`,
// 			});
// 		})
// 		.catch((err) => {
// 			res.send(err);
// 		});
// };
module.exports = {
  getAllservice,
  createNewService,
  updateAnServiceById,
  deleteServiceById,
  // deleteServicByAuthor,
};
