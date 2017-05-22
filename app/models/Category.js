module.exports = function(sequelize, Sequelize) {

    var Category = sequelize.define('Category', {
        categoryId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Category;
};