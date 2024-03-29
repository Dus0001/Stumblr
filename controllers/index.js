const router = require('express').Router();

const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes');
const apiRoutes = require('./api')

router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);
router.use('/api', apiRoutes);

module.exports = router;