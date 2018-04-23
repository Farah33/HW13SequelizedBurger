//DEPENDENCIES 
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
//  models for sync
var db = require("./models");

//  port envo
var PORT = process.env.PORT || 8080;

// Call the express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// using the handlebars views
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controllers/api_routes.js")(app);
require("./controllers/customer_api_routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});