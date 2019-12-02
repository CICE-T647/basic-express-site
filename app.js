const express = require('express');
const app = express();
const PORT = 3000;

app.get("/query", (req, res) => res.send("Hello World"));//Send
app.get("/home", (req, res) => res.sendFile(__dirname+"/views/home.html"));
app.get("/about", (req, res) => res.sendFile(__dirname+"/views/about.html"));
app.get("/gallery", (req, res) => res.sendFile(__dirname+"/views/gallery.html"));
app.use(express.static(__dirname+"/public")); //Para que use de forma pública esta carpeta. 
app.listen(PORT, ()=> console.log(`servidor corriendo en puerto ${PORT}`));
