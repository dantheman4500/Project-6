const router = require('express').Router();
const { Reviews, User } = require('../models');
const withAuth = require('../utils/auth');

// This is the home route 
router.get('/', async (req, res) => {
  res.render('homepage');
});

// 404 page
router.get('/404', async (req, res) => {
  res.render('404');
});


// Use withAuth middleware to prevent access to route
  router.get('/profile', withAuth, async (req, res) => {
    try {
// Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Reviews }],
      });

      const user = userData.get({ plain: true });

      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
// If the user is already logged in go to profile
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
  });

  module.exports = router;
