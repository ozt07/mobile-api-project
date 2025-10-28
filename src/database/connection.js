const { Sequelize } = require('sequelize');
const path = require('path');

// Configuración para Google Cloud vs desarrollo
const isProduction = process.env.NODE_ENV === 'production';
const storagePath = isProduction 
    ? '/tmp/database.sqlite'  // GCP App Engine usa /tmp
    : path.join(__dirname, 'database.sqlite');

console.log('Database path:', storagePath);

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: storagePath,
    logging: isProduction ? false : console.log,
});

module.exports = sequelize;
