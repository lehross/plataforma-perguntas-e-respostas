const Sequelize = require("sequelize");
const connection = require("./database");

//model resposta
const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: { //relacionamento cru
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: false}).then(() => {}); //sincronizar com o banco de dados

module.exports = Resposta;