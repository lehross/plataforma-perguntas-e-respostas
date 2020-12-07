const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const connection = require("./database/database");

const Pergunta = require("./database/Pergunta");

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

app.set("view engine", "ejs"); //setup ejs como view engine
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/", (req, res) => {
    //renderizar o html
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

//receber formulário de pergunta
app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/"); //redirecionar para a página principal
    }); //insert into
});

app.listen(3000, () => {
    console.log("App iniciado!");
});