const MovieList = require("./movie-list");
class Sockets {
  constructor(io) {
    this.io = io;
    this.moviesList = new MovieList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("connected client!");

      socket.emit("current-movies", this.moviesList.getMovies());

      socket.on("vote-movie", (id) => {
        this.moviesList.increaseVotes(id);
        this.io.emit("current-movies", this.moviesList.getMovies());
      });

      socket.on("remove-movie", (id) => {
        this.moviesList.removeMovies(id);
        this.io.emit("current-movies", this.moviesList.getMovies());
      });

      socket.on("change-name-movie", ({ id, name }) => {
        this.moviesList.changeName(id, name);
        this.io.emit("current-movies", this.moviesList.getMovies());
      });

      socket.on("create-movie", ({ name }) => {
        this.moviesList.addMovie(name);
        this.io.emit("current-movies", this.moviesList.getMovies());
      });
    });
  }
}
module.exports = Sockets;
