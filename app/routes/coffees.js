var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('HelloWorldCoffeeDB', ['coffees']);
var bodyParser = require('body-parser');

router.use(bodyParser.json());

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

router.put('/', function(req, res){
    db.coffees.findAndModify({query: {_id: mongojs.ObjectId(req.body._id)}, update: {$set:
        {
            name: req.body.name,
            price: req.body.price,
            img: req.body.img,
            discribe: req.body.discribe
        }
    }, new: true}, function(err, docs){
        res.end(JSON.stringify(docs));
    });
});

router.post('/', function(req, res){
    db.coffees.insert(req.body, function(err, docs){
        res.end(JSON.stringify(docs));
    });
});

router.delete('/:id', function(req, res){
    db.coffees.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, docs){
        res.end(JSON.stringify(docs));
    });
});

module.exports = router;