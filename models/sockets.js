const Markers = require("./markers");

class Sockets {
  constructor(io) {
    this.io = io;

    this.markers = new Markers();

    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("cliente conectado!");
      socket.emit("active-markers", this.markers.actives);

      socket.on("new-marker", (marker) => {
        this.markers.addMarker(marker);
        //Para emitir a todos menos a quien lo creo
        socket.broadcast.emit("new-marker", marker);
      });
    });
  }
}
module.exports = Sockets;
