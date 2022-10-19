// dependencies 
const User = require('../../models/User');
const router = require('express').Router();
// Nicole - added ../../utils/auth and server 'now listening'
const withAuth = require('../../utils/auth');

// maps the url to /login
router.get('/login', async (req, res) => {
  if(req.session){
    res.redirect("/profile");
  }
  else{
    res.redirect("/login");
  }
});


module.exports = router;