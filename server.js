//Here we declare our dependencies

var express = require('express'); // express server
var bodyParser = require('body-parser'); //Middleware
//var methodOverride = require('method-override'); //For PUT method in HTML
//var Sequelize = require('sequelize');
//var models = require('./models');
// Requiring our models for syncing
var db = require("./models");

var PORT = process.env.PORT || 8080;

//setting up express app
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//Express Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//API routes
var routes = require('./controllers/burgers_controller');
app.use('/', routes);

//starting server
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`Server listening on PORT: ${PORT}`);
    });
});