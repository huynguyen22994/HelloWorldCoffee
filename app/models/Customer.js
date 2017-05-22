module.exports = function(sequelize, Sequelize) {

    var Customer = sequelize.define('Customer', {
        customerId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        avatarLink: {
            type: Sequelize.STRING,
            allowNull: true
        },
        phoneNumber: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        birthDay: {
            type: Sequelize.DATE,
            allowNull: true
        }
    });

    return Customer;
};