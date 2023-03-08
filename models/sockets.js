const Markers = require("./markers");

class Sockets {
  constructor(io) {
    this.io = io;

    this.markers = new Markers();

    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      // console.log("cliente conectado!");

      socket.emit("active-markers", this.markers.actives);

      socket.on("new-marker", (marker) => {
        this.markers.addMarker(marker);
        //socket.broadcast --> Para emitir a todos menos a quien lo creo
        socket.broadcast.emit("new-marker", marker);
      });

      socket.on("update-marker", (marker) => {
        this.markers.updateMarker(marker);
        socket.broadcast.emit("update-marker", marker);
      });
    });
  }
}
module.exports = Sockets;
