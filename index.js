const express = require("express");
const app = express();

app.set("view engine", "ejs"); //setup ejs como view engine

//rotas
app.get("/", (req, res) => {
    //renderizar o html
    res.render("index");
});

app.listen(3000, () => {
    console.log("App iniciado!");
});