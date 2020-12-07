const Sequelize = require("sequelize");
const connection = require("./database");

//criar um model
const Pergunta = connection.define('pergunta', { //nome da tabela
    titulo: {
        type: Sequelize.STRING, //textos curtos
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT, //textos longos
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {}); //sincronizar com o banco de dados

module.exports = Pergunta;