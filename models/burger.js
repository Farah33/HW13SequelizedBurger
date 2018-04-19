//Export the database functions for the controller (burger_controller.js)
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {
        name: {
            type: DataTypes.STRING,

        },

        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    }, {
        timestamps: true,
        createdAt: DataTypes.DATETIME,
        updateAt: DataTypes.NOW
    });


    return Burger;
};