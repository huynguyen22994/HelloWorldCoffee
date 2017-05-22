var models = require('./app/models');

models.sequelize.sync();

// models.Customer.hasMany(models.Bill, {
//   foreignKey: 'customerId'
// });

// models.Bill.belongsTo(models.Customer, {
//   foreignKey: 'customerId'
// });

// Bill.hasMany(BillDetail, {
//   foreignKey: 'billId'
// });

// BillDetail.belongsTo(Bill, {
//   foreignKey: 'billId'
// });

// Coffee.hasMany(BillDetail, {
//   foreignKey: 'coffeeId'
// });

// BillDetail.belongsTo(Coffee, {
//   foreignKey: 'coffeeId'
// });