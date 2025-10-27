const { Sequelize } = require('sequelize');
const path = require('path');

// Usar una ruta en la carpeta temporal de Windows
const storagePath = path.join(__dirname, 'database.sqlite');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: storagePath,
    logging: console.log,
});

module.exports = sequelize;