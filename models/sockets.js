const Markers = require("./markers");

class Sockets {
  constructor(io) {
    this.io = io;

    this.markers = new Markers();

    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("cliente conectado!")
    });
  }
}
module.exports = Sockets;
