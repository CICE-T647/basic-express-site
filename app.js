const express = require("express");
const app = express();
const PORT = 3000;

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/thankspage", (req, res) =>
    res.sendFile(__dirname + "/views/thankspage.html")
);

app.use(express.static(__dirname + "/public"));
app.get("/html", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/views/home.html");
});

app.listen(PORT, () => console.log("servidor corriendo en puerto 3000"));
