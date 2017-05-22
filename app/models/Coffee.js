module.exports = function(sequelize, Sequelize) {

    var Coffee = sequelize.define('Coffee', {
        coffeeId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT(11),
            allowNull: false
        },
        originalImg: {
            type: Sequelize.STRING,
            allowNull: true
        },
        linkImg: {
            type: Sequelize.STRING,
            allowNull: true
        },
        discribe: {
            type: Sequelize.STRING,
            allowNull: true
        },
        drinkTypeId: {
            type: Sequelize.UUID,
            allowNull: false
        }
    });

    return Coffee;
};