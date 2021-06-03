const  usersModel  = require('./../../db/models/user');

const createNewUser = (req,res) =>{
    console.log("...............create new user")
    const {firstName, lastName, age, country, email, password } = req.body;

    const user = new usersModel({
        firstName,
        lastName,
        age,    
        country,
        email,
        password,
    });

    user
        .save()
        .then((result)=>{
            res.status(201)
            res.json(result);
        })
        .catch((err)=>{
            res.json(err);
        });
};

module.exports = {

    createNewUser,
}