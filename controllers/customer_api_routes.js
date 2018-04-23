//Dependencies
//requiring models
var db = require("../models");

//requiring express

var express = require('express');
var router = express.Router();


//Routes
module.exports = function(app) {

    //routes for getting customer
    router.get("/", function(req, res) {
        db.Customer.findAll({

        }).then(function(result) {
            var custObj = { customer: result };
            res.render("index", custObj);
        });

    });
    //post routes for saving new cust


    // POST route for saving a new customer
    app.post("/api/customers", function(req, res) {
        db.Customer.create({
                name: req.body.name,
                BurgerId: req.body.BurgerId
            })
            .then(function(result) {
                res.json(result);
            });
    });
};
//UPDATE devour