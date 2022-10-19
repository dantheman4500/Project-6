// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./Controllers');
const path = require('path');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');



// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
