const mongoose = require('mongoose')

const movieListSchema = new mongoose.Schema({
  title: String,
  description: String,
  year: Number,
  image: String,
  watched: Boolean
})

const MovieList = mongoose.model('MovieList', movieListSchema)

module.exports = MovieList
