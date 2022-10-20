const router = require('express').Router();
// Nicole - NTS you added the loginpage-Routes
const userRoutes = require("./userRoutes");

router.use('/users', userRoutes);

module.exports = router;