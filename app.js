const express = require("express");
const app = express();

const PORT = 3001;

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
