var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('HelloWorldCoffeeDB', ['coffees'])

router.get('/', function(req, res){
    db.coffees.find(function(err, docs){
        res.end(JSON.stringify(docs));
    });
});

router.get('/:id', function(req, res){
    var id = req.params.id;
     db.coffees.findOne({_id: mongojs.ObjectId(id)}, function(err, docs){
        res.end(JSON.stringify(docs));
    });
});

module.exports = router;