//requiring models
var db = require("./models");
//get the rout


var express = require('express');
var router = express.Router();

//page to load
router.get('/', function(req, res) {
    db.Burger.findAll({

    }).then(function(result) {
        var burgers = { burgers: result };
        res.render("index", burgers);
    });

});


router.get('/index', function(req, res) {
    Burger.findAll({

    }).then(function(result) {
        var hbsObject = { burger: result };
        res.render('index', hbsObject);
        return res.json(result);
    });

});


//CREATE new burger

router.post('/create', function(req, res) {
    db.Burger.create({
        name: req.body.name
    }).then(function(newBurger) {
        res.json(newBurger);
    });
});

//UPDATE devour

router.put('/update/:id', function(req, res) {
    console.log("My burger");
    db.Burger.update({
        devoured: true
    })
    where: {
            id: req.params.id
        }
        //}).then(function(result) {
    res.json(result);
})

module.exports = router;