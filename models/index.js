const SQL_HOST = process.env.SQL_HOST || "localhost";
const SQL_USER = process.env.SQL_USER || "root";
const SQL_PASSWORD = process.env.SQL_PASSWORD || "root";
const SQL_DB = process.env.SQL_DB || "budget";

const Sequelize = require('sequelize');
const sequelize = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD, {
  host: SQL_HOST,
  dialect: "mysql",
});

const models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    items: require("./items.js")(sequelize, Sequelize),
    users: require("./users.js")(sequelize, Sequelize),
}

module.exports = models;