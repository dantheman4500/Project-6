const router = require('express').Router();
const homeRoutes = require('./Homepage-route');
const apiRoutes = require("./api");
const userRoutes = require("./api/userRoutes");



//home route 
router.use('/', homeRoutes);
// api route 
router.use('/api', apiRoutes);


module.exports = router;
