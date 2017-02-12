var express = require('express');
var app = express();
var server = require('http').createServer(app);
var coffees = require('./app/routes/coffees.js');
var customers = require('./app/routes/customers.js');
var contact = require('./app/routes/contact.js');
var path = require('path');

var port = process.env.PORT || 3000;

//app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use('/coffees', coffees);
app.use('/customers', customers);
app.use('/contact', contact);

app.get('/admin', function(req, res){
    res.sendFile(path.join(__dirname + '/public/admin/index.html'));
});

server.listen(port, function(){
    console.log('Server is running on port 3000');
});

exports = module.exports = app;