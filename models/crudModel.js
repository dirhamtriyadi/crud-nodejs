const {Sequelize} = require('sequelize');
const db = require('../configs/db');

const crudModel = db.define('crud', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = crudModel;