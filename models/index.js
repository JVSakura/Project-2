const SQL_SERVER = process.env.SQL_SERVER || "localhost";

const SQL_USER = process.env.SQL_USER || "root";

const SQL_PASSWORD = process.env.SQL_PASSWORD || "password";

const SQL_DB = process.env.SQL_DB || "password";

// var sequelize = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD);

Message @helloworld
//const grabs sql_server out of local environment, if not found defaults to local... same for user

Message @helloworld
const Sequelize = require('sequelize');
const sequelize = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD, {
  host: SQL_HOST,
  dialect: "mysql",
});

//requires orm = sequalize, protect api keys with variables which is SQL_USER which looks on local for variable matches

const models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    budget: require("./budget.js")(sequelize, Sequelize),
    users: require("./users.js")(sequelize, Sequelize),
}

module.exports = models;