const router = rrequire('express').Router();
const{Comment} = require("../../models");
const withAuth = require("../../utils/auth");

//get all comments
router.get('/', (req, res) => {
    Comment.findAll()
    .then(commentData => res.json(commentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//creates a new user post
router.post('/', withAuth, (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id,
    })
    .then(commentData => {
        res.json(commentData)
    })
    .catch(err => {
        console.log(err),
        res.status(500).json(err)
    });
});

//deletes comments 
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(commentData => {
        if(!commentData){
            res.status(404).json({message: "No comment found with this id"})
            return;
        }
        res.json(commentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;