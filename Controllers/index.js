const router = require('express').Router();
const homeRoutes = require('./Homepage-route');

router.use('/', homeRoutes);

module.exports = router;
