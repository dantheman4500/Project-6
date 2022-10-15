const router = require('express').Router();

// This is the home route 
router.get('/', async (req, res) => {
    res.render('homepage');
  });
  
//  THis is the Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // If not logged in it will take you the render route
  res.render('login');
});


module.exports = router;
