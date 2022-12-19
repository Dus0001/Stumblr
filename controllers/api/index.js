const router = require('express').Router();

const commentRoutes= require('./comment-routes');
const postRoutes = require('./post-routes');
const usertRoutes = require('./user-routes')

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', usertRoutes);

module.exports = router;