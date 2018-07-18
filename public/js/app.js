const app = angular.module('MovieApp', []);

app.controller("MainController", ["$http", function ($http) {
    const controller = this;
    const editIndex = -1;
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
                title: this.title,
                description: this.description,
                year: this.year,
                image: this.image,
                watched: this.watched,
            }
        }).then(function (response) {
            console.log(response);
        });
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
}]);
