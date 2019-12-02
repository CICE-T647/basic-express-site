const express = require('express');
const app = express();
const PORT = 3000;


app.get("/", (req,res, next) => {
    res.send({message: "hola mundo"});    
});

app.get('/home', (req, res)=> {    
    res.sendFile( __dirname + "/views/home.html");
    console.log(req.query)
});

app.get('/about', (req, res)=> {    
    res.sendFile( __dirname + "/views/about.html")
});

app.get('/galeria', (req, res)=> {    
    res.sendFile( __dirname + "/views/galeria.html")
});

app.use(express.static(__dirname + "/public"))

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})
