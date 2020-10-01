require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("heroku_c853b2fbc06053d","bbecd1000a6b4f", "5f9e1fb4", {
    host: "us-cdbr-east-02.cleardb.com",
    dialect: "mysql",
    logging: true,
    port: 3306
})

module.exports = sequelize;