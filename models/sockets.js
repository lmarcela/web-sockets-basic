const MovieList = require("./movie-list");
class Sockets {
  constructor(io) {
    this.io = io;
    this.moviesList = new MovieList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      socket.emit("current-movies", this.moviesList.getMovies());
      // socket.on("mensaje-al-servidor", (data) => {
      //   console.log("el cliente envio algo", data);
      //   this.io.emit("mensaje-del-servidor", data);
      // });
    });
  }
}
module.exports = Sockets;
