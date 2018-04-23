//Export the database functions for the controller (burger_controller.js)
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

    });
    Burger.associate = function(models) {
        Burger.hasMany(models.Customer, {
            oneDelete: "cascade"
        });
    };


    return Burger;
};