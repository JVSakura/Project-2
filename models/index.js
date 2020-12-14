const Sequelize = require('sequelize');
const sequelize = new Sequelize('pocketusers_db', 'root', 'NUcode2020!114', {
  host: "localhost",
  dialect: "mysql",
});

const models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    items: require("./items.js")(sequelize, Sequelize),
    users: require("./users.js")(sequelize, Sequelize),
}

User.hasMany(Items)
Items.belongsto(User)

module.exports = models;
