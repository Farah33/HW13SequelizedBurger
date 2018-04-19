//Initialie express
var express = require('express');
var router = express.Router();

//Import the model (burger.js) to use its database functions
var db = require('.//models');

//creating a variable for the model
var burger = db.burgers;

//redirect to '/burgers' from root
router.get('/', function(req, res) {
    res.redirect('/burgers')
});

//Creating api routes adn adding logic for routes
router.get('/burgers', function(req, res) {
    console.log(burger);
    burger.findAll({}).then(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

//Post route for adding a burger to the db
router.post('/burgers/add', function(req, res) {
    burger.create({
        name: req.body.name,
        devoured: req.body.devoured
    }).then(function() {
        res.redirect('/burgers');
    });
});

router.put("/burgers/update/:id", function(req, res) {
    burger.update({
        devoured: req.body.devoured,

    }, {
        fields: ['devoured'],
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/burgers');
    });

});

module.exports = router;