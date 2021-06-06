const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authentication = (req, res, next) => {
    try {
        if(!req.headers.authorization)
            return res.status(403).json({ message: 'forbidden'});
        
            let token = req.headers.authorization.split(' ').pop();
        
        jwt.verify(token, process.env.SECRET);

        next();

    } catch (error) {
        res.status(403).json({message: 'forbidden'});
    }
}

module.exports = authentication