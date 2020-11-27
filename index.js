const express = require("express");
const app = express();

app.set("view engine", "ejs"); //setup ejs como view engine
app.use(express.static("public"));

//rotas
app.get("/", (req, res) => {
    //renderizar o html
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.listen(3000, () => {
    console.log("App iniciado!");
});