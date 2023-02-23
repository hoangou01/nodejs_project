const homePage = require('./app/controllers/homeController');
const express = require('express')
const handlebars = require('express-handlebars').engine;
const path = require('path');
const app = express()
const port = 3000
const sass = require('node-sass');
const route = require('./routes');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//use dir public
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
//tempate engin
app.engine('hbs', handlebars({
  extname : '.hbs'
}));
      app.set("view engine", 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
//

//run route
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})