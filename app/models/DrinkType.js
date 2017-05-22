module.exports = function(sequelize, Sequelize) {

    var DrinkType = sequelize.define('DrinkType', {
        drinkTypeId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        categoryId: {
            type: Sequelize.UUID,
            allowNull: false
        }
    });

    return DrinkType;
};