const Markers = require("./markers");

class Sockets {
  constructor(io) {
    this.io = io;

    this.markers = new Markers();

    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      socket.on("mensaje-al-servidor", (data) => {
        console.log("el cliente envio algo", data);
        this.io.emit("mensaje-del-servidor", data);
      });
    });
  }
}
module.exports = Sockets;
