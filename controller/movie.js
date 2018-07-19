const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');

// INDEX ROUTE
router.get('/', (request, response) => {
    Movie.find({}, (error, Movies) => {
        response.json(Movies);
    });
});

// CREATE ROUTE
router.post('/', (request, response) => {
    Movie.create(request.body, (error, createdMovie) => {
      console.log(error);
        response.json(createdMovie);
    });
});

// DELETE ROUTE
router.delete('/:id', (request, response) => {
    Movie.findByIdAndRemove(request.params.id, (error, deletedMovie) => {
        response.json(deletedMovie);
    });
});

// UPDATE ROUTE
router.put('/:id', (request, response) => {
    Movie.findByIdAndUpdate(request.params.id, request.body, { new: true }, (error, updatedMovie) => {
        response.json(updatedMovie);
    });
});

module.exports = router;
