const { checkJWT } = require("../helpers/jwt");

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      const [valid, uid] = checkJWT(socket.handshake.query["x-token"]);

      if (!valid) {
        console.log("socket no identificado");
        return socket.disconnect();
      }

      console.log("Cliente conectado!", uid);

      socket.on("disconnect", async () => {
        console.log("Cliente desconectado!", uid);
      });
    });
  }
}
module.exports = Sockets;
