// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const secret = process.env.SECRET;

// const authentication = (req , res , next)=>{
//     if(req.headers.authorization){
//         const token = req.headers.authorization.splite(" ").pop();
//         jwt.verify(token,secret,(err, result)=>{
//             if(result){
//                 console.log(token);
//                 req.token = result;
//                 console.log("result......",result )
//                 next();
//             }
//             else{
//                 res.status(403).json("The token is invalid or expired");
//             }
//         })
//     }
//     else{
//         res.json("No headers .authorization are found");

//     }
// }
