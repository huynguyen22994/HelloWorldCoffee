var models = require('../models');

module.exports.getCoffees = (req, res, next) => {
    models.Coffee.findAndCountAll()
        .then((result) => {
            let responses = {
                count: result.count,
                coffees: []
            }
            result.rows.forEach((coffee) => {
                responses.coffees.push(coffee.dataValues);
            });
            res.end(JSON.stringify(responses));
        },
        (err) => {
            console.log(err);
        })
};

module.exports.createCoffee = (req, res, next) => {
    var coffee = req.body;
    if (coffee) {
        models.Coffee.create({
            name: coffee.name,
            price: coffee.price,
            originalImg: coffee.originalImg,
            linkImg: coffee.linkImg,
            discribe: coffee.discribe
        }).then((result) => {
            res.end("insert success");
        }, (err) => {
            res.statusCode = 400;
            res.end();
        });
    } else {
        res.statusCode = 400;
        res.end();
    }
};