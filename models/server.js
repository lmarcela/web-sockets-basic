const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    dbConnection();

    this.server = http.createServer(this.app);

    this.io = socketio(this.server);
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    this.app.use(express.json());

    this.app.use("/api/login", require("../router/auth"));
    this.app.use("/api/messages", require("../router/messages"));
  }

  configurarSockets() {
    new Sockets(this.io);
    this.app.use(cors());
  }

  exceute() {
    this.configurarSockets();

    this.middlewares();

    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto: ", this.port);
    });
  }
}
module.exports = Server;
