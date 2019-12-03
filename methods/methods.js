const movies = require("../models/moviesData");

// getMovieById

exports.getMovieById = (id, callback) => {

    const movie = movies.find(movie => {
        return movie.id === id;
    })
    console.log(movies);
    if (!movie) callback(`No hay ninguna pelicula con el id ${id}`);
    else callback(null, movie);

}