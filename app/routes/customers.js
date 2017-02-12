var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('HelloWorldCoffeeDB', ['customers']);
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', function(req, res){
       db.customers.find({email: req.body.email}, function(err, docs){
           if(err){
               console.log(err);
           } else {
                if(docs == [] || docs == '[]' || docs == {} || docs == '{}' || docs == null || docs == ''){
                    db.customers.insert(req.body, function(err, docs){
                        console.log('add success');
                        res.end(JSON.stringify(docs));
                    });
                } else {
                    console.log('tk da ton tai');
                    res.end();
                }
           }  
    });
});

module.exports = router;