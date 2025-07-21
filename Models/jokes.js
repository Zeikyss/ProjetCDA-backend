const { DataTypes, Model } = require("sequelize")
const sequelize = require("../database")

class Jokes extends Model {}

Jokes.init({
    joke:{
        type:DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'joke',
},
);

module.exports = Jokes;