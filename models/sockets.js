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

    });
  }
}
module.exports = Sockets;
