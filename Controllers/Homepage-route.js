const router = require('express').Router();

// This is the home route 
router.get('/', async (req, res) => {
    res.render('homepage');
  });

router.get('/login',async(req,res)=>{
  res.render('login');
});
  
module.exports = router;
