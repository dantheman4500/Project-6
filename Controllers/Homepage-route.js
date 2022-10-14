const router = require('express').Router();

// This is the 'get' route 
router.get('/', async (req, res) => {
    res.render('homepage');
  });
  

module.exports = router;
