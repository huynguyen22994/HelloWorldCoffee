var CoffeeCtrl = require('./CoffeeCtrl');

// Coffees
module.exports.getCoffees = (req, res, next) => {
    CoffeeCtrl.getCoffees(req, res, next);
};

module.exports.createCoffee = (req, res, next) => {
    CoffeeCtrl.createCoffee(req, res, next);
};