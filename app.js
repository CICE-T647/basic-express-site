const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
app.use(express.static(__dirname + "/public"));

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (req,res)=>{
    res.sendFile(__dirname + '/views/about.html');
});
app.get('/galery', (req,res)=>{
    res.sendFile(__dirname + '/views/galery.html');
});




