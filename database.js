const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projectCDA','user','',{
    dialect: 'sqlite',
    host: './db.sqlite'
});


module.exports = sequelize;