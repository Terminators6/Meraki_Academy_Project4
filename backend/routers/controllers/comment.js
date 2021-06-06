const Comment = require('./../../db/models/commentSchema')


const createNewComment =async ( req, res ) => {
    console.log('....createNewComment....');

    const { comment, commenter } = req.body;
    const newComment = new Comment({ comment, commenter })
    
    newComment.save()
        .then((result) => {
            console.log('.........',result.comment);
            res.status(200);
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })

};

module.exports ={ createNewComment } 