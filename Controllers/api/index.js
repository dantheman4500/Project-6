const router = require('express').Router();

// Nicole - NTS you added the loginpage-Routes
const loginRoutes = require('./loginpage-Route');
const userRoutes = require('./userRoutes');
// TODO: Add profileRoutes? 

router.use('/users', userRoutes);

module.exports = router;