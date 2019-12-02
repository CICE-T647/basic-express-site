const express = require("express");
const app = express();
const PORT = 3000;

app.get("/home", (req, res) => res.sendFile(__dirname + "/views/home/"));
app.get("/about", (req, res) => res.sendFile(__dirname + "/views/about/"));
app.get("/gallery", (req, res) => res.sendFile(__dirname + "/views/gallery/"));
app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))