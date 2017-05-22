var models = require(__dirname);

models.Customer.hasMany(models.Bill, {
  foreignKey: 'customerId'
});

models.Bill.belongsTo(models.Customer, {
  foreignKey: 'customerId'
});

models.Bill.hasMany(models.BillDetail, {
  foreignKey: 'billId'
});

models.BillDetail.belongsTo(models.Bill, {
  foreignKey: 'billId'
});

models.Coffee.hasMany(models.BillDetail, {
  foreignKey: 'coffeeId'
});

models.BillDetail.belongsTo(models.Coffee, {
  foreignKey: 'coffeeId'
});

models.Category.hasMany(models.DrinkType, {
  foreignKey: 'categoryId'
});

models.DrinkType.belongsTo(models.Category, {
  foreignKey: 'categoryId'
});

models.DrinkType.hasMany(models.Coffee, {
  foreignKey: 'drinkTypeId'
});

models.Coffee.belongsTo(models.DrinkType, {
  foreignKey: 'drinkTypeId'
});