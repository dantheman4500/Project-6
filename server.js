// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');



// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

//  Creats a seassion 
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // life of cookies 
    maxAge:24*60*60*1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Uses Session
app.use(session(sess));


// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(require('./Controllers'));

app.use(express.static('public'));


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
  