module.exports = function(sequelize, Sequelize) {

    var BillDetail = sequelize.define('BillDetail', {
        billId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        coffeeId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        unitPrice: {
            type: Sequelize.FLOAT(20),
            allowNull: false
        }
    });

    BillDetail.removeAttribute('id');

    return BillDetail;
};