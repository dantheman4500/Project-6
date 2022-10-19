//Dependencies  
const router = require('express').Router();

// This is calling on the routes found in the api folder under 'controllers'
const apiRoutes = require('./api');
// This is requiring the homepage-route file found directly under 'controllers
const homeRoutes = require('./Homepage-route');


//Use functio for homeRoutes and apiRoutes 
router.use('/', homeRoutes); 
router.use('/api', apiRoutes);


module.exports = router;
