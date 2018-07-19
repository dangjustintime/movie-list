const app = angular.module('MovieApp', []);

app.controller("MainController", ["$http", function ($http) {
    const controller = this;
    const editIndex = -1;
    this.showEditForm = false
    this.movies = []
    this.movie = {}
    this.watched = 'Not Watched'


    this.toggleModal = (movie)=>{
      console.log(movie);
      this.showEditForm = !this.showEditForm
      this.movie = movie
    }

    this.watchedToggle = (movie) =>{
      movie.watched = !movie.watched
      $http({
          method: "PUT",
          url: "/movie/" + movie._id,
          data: {
              title: this.title,
              description: this.description,
              year: this.year,
              image: this.image,
              watched: movie.watched,
          }
      }).then(function (response) {
          console.log(movie);
      }, function (error) {
        console.log(error);
      });

      if(this.watched == 'Not Watched'){
        this.watched = 'Watched'
      } else {
        this.watched = 'Not Watched'
      }
    }
    // GET MOVIES
    this.getMovies = function () {
        $http({
            method: "GET",
            url: "/movie"
        }).then(function (response) {
            controller.movies = response.data;
        }, function (error) {
            console.log(error);
        })
    }
    // CREATE MOVIE
    this.createMovie = function () {
      console.log(this.title);
      console.log(this.watched);
        $http({
            method: "POST",
            url: "/movie",
            data: {
                title: this.title,
                description: this.description,
                year: this.year,
                image: this.image,
                watched: this.watched,
            }
        }).then(function (response) {
            controller.getMovies();
        }, function (error) {
            console.log(error);
        })
    }
    // EDIT MOVIE
    this.editMovie = function (movie) {

        $http({
            method: "PUT",
            url: "/movie/" + movie._id,
            data: {
                title: movie.title,
                description: movie.description,
                year: movie.year,
                image: movie.image,
                watched: movie.watched,
            }
        }).then(function (response) {
            console.log('movie is edited');
        }, function (error) {
          console.log(error);
        });
        controller.toggleModal()
    }
    // DELETE MOVIE
    this.deleteMovie = function (movie) {
        $http({
            method: "DELETE",
            url: "/movie/" + movie._id
        }).then(function (response) {
            controller.getMovies();
        }, function (error) {
            console.log(error);
        })
    }



    this.getMovies()
}]);
