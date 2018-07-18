// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose');
const app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());

// CONTROLLER
const MovieController = require('./controller/movie.js');
app.use('/movie', MovieController);

// HOME ROUTE
app.get('/', (req, res)=>{
  res.send('Hello World');
})

// PORT
app.listen(3000, ()=>{
  console.log('listening....');
});

// MONGOOSE CONNECTION
mongoose.connect('mongodb://localhost:27017/movie_list_app', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...');
});
