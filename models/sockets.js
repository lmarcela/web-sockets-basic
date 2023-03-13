const {
  userConnected,
  userDisconnected,
  getUsers,
  saveMessage,
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

      // Unir al usuario a una sala de socket.io
      socket.join(uid);

      // Emitir todos los usuarios conectados
      this.io.emit("user-list", await getUsers());

      // Escuchar cuando el cliente manda un mensaje
      socket.on("personal-message", async (payload) => {
        const message = await saveMessage(payload);
        console.log(message);
      });

      socket.on("disconnect", async () => {
        await userDisconnected(uid);
        this.io.emit("user-list", await getUsers());
      });
    });
  }
}
module.exports = Sockets;
