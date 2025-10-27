const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Class = sequelize.define('Class', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
}, {
    timestamps: true
});

module.exports = Class;