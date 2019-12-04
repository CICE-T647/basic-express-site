// Packages
const express = require('express')
const app = express()
const PORT = 3000

// JS modules
// const {openForm,closeForm} = require(__dirname+"/public/js/methods")
const {openForm, closeForm} = require(__dirname+"/public/js/methods.js")

// Views
app.get("/home", (req, res, next) => {res.sendfile(__dirname+"/views/home.html")})
app.get("/about", (req, res, next) => {res.sendfile(__dirname+"/views/about.html")})
// app.get("/images", (req, res, next) => {res.sendfile(__dirname+"/views/images.html")})
app.get("/movieSearch", (req, res, next) => {res.sendfile(__dirname+"/views/movieSearch.html")})



app.use(express.static(__dirname + "/public")) 
// Console info
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))