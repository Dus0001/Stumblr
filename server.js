const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const sequelize = require('./config/connection'); 
const helpers =require('./utils/helpers')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'stumblr',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({helpers});
const PORT = process.env.PORT || 3002;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/')));

//app.use(require('./controllers'));

sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
});