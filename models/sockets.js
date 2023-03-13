const {
  userConnected,
  userDisconnected,
  getUsers,
} = require("../controllers/sockets");
const { checkJWT } = require("../helpers/jwt");

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", async (socket) => {
      const [valid, uid] = checkJWT(socket.handshake.query["x-token"]);

      if (!valid) {
        console.log("socket no identificado");
        return socket.disconnect();
      }

      await userConnected(uid);

      // Emitir todos los usuarios conectados
      this.io.emit("user-list", await getUsers());

      socket.on("disconnect", async () => {
        await userDisconnected(uid);
      });
    });
  }
}
module.exports = Sockets;
