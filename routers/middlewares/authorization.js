// const jwt = require("jsonwebtoken");
// const Role = require("./../../db/models/role");

// const authorization = (permission) => {
//   return function (req, res, next) {
//     Role.findById({ _id: req.token.role }).then((result) => {
//       const perm = result.permission;
//       if (perm.includes(permission)) {
//         next();
//       } else {
//         result.status(403).json("forbidden");
//       }
//     })
//     .catch((err)=>{
//         res.send("There is no role");
//     })
//   };
// };
