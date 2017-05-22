var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var config = fs.readFileSync('./config/config.json');
var configData = JSON.parse(config.toString());

var storage = multer.diskStorage({
    destination: configData.storageCoffeePath,
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)
            cb(null, raw.toString('hex') + path.extname(file.originalname))
        })
    }
});

var uploadCoffeeImg = multer({ storage: storage });

router.post('/coffee/upload', uploadCoffeeImg.any(), function(req, res){
    res.end(JSON.stringify(req.files[0]));
});

module.exports = router;