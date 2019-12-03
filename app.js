const express = require('express');
const app = express();
const PORT = 3000;

const { 
    getMovieFromMovieDataById, 
    getMoviesFromMoviesDataByTitle, 
    getMoviesFromMoviesDataByShowtime 
} = require("./methods")

app.get("/", (req,res, next) => {
    res.send({message: "hola mundo"});    
});

app.get("/getMovieById", (req, res) => {
    console.log(req.query)
    const id = req.query.id;
    if(Object.keys(req.query).length && req.query.id) {
        getMovieFromMovieDataById(parseInt(id), (error, data) => {
            if (error) {
                res.statusCode = error.status ? error.status : 500
                res.end(error.message ? error.message : "Internal server error.");
            }
            res.statusCode = 200;
            res.end(JSON.stringify(data))
        });  
    }
    else {
        res.statusCode = 422
        res.end("Debe proporcionar una id válida")

    }
})

app.get("/getMovieByTitle", (req, res) => {    
    const title = req.query.title;
    if(Object.keys(req.query).length && req.query.title) {
        getMoviesFromMoviesDataByTitle(title)
        .then((movies)=> {
            res.statusCode = 200
            res.end(JSON.stringify(movies))
        })
        .catch((error) => {
            res.statusCode = 422
            res.end(error.message)
        })  
    }
    else {
        res.statusCode = 422
        res.end("Debe proporcionar un titulo")

    }
})

app.get("/getMovieByShowTime", async (req, res) => {    
    const time = req.query.time;
    if(Object.keys(req.query).length && req.query.time) {
        try {
            const data = await getMoviesFromMoviesDataByShowtime(time)
            res.statusCode = 200
            res.end(JSON.stringify(data))

        } catch (error){
            console.log(error)
            res.statusCode = 422
            res.end(error.message)

        } 
    }
    else {
        res.statusCode = 422
        res.end("Debe proporcionar un titulo")

    }
})

app.get('/home', (req, res)=> {    
    res.sendFile( __dirname + "/views/home.html");
   
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
