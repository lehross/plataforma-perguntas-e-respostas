const Sequelize = require("sequelize");

const connection = new Sequelize("q&aperguntas", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;