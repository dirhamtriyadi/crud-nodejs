const { Sequelize } = require('sequelize');

const db = new Sequelize('crud', 'root', '',{
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = db;

(async () => {
    try {
        await db.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();