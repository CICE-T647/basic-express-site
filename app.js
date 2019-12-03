const express = require("express");
const app = express();
const PORT = 3000;
const methods = require("./methods/methods")


app.get("/", (req, res) => {
    res.send({ message: "Estamos en la raiz" });
});

app.get("/methods", (req, res) => {
    const id = req.query.id;
    methods.getMovieById(id, (error, data) => {
        if (error) {
            res.send(error);
        }
        //console.log(data);
        //res.send(data);

    })



});

app.use(express.static(__dirname + "/public"));

app.get("/home", (req, res) =>
    res.sendfile(__dirname + "/views/home.html")
)

app.get("/about", (req, res) => res.sendfile(__dirname + "/views/about.html"))

app.listen(PORT, () => {
    console.log("Servidor escuchando en puerto 3000");
});