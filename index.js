const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.use(express.static(__dirname + "/public"));
io.on("connection", (socket) => {
  //   console.log("cliente conectado", socket.id);
  //   socket.emit("mensaje-bienvenida", {
  //     msg: "Bienvenido al server",
  //     fecha: new Date(),
  //   });
  //   socket.on("mensaje-cliente", (data) => {
  //     console.log("el cliente envio algo", data);
  //   });
  socket.on("mensaje-al-servidor", (data) => {
    console.log("el cliente envio algo", data);
    io.emit('mensaje-del-servidor',data);
  });
});
server.listen(8080, () => {
  console.log("server corriendo en puerto 8080!");
});
