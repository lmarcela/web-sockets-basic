const Server = require("./models/server");

const server = new Server();

server.exceute();

// io.on("connection", (socket) => {
//   //   console.log("cliente conectado", socket.id);
//   //   socket.emit("mensaje-bienvenida", {
//   //     msg: "Bienvenido al server",
//   //     fecha: new Date(),
//   //   });
//   //   socket.on("mensaje-cliente", (data) => {
//   //     console.log("el cliente envio algo", data);
//   //   });
//   socket.on("mensaje-al-servidor", (data) => {
//     console.log("el cliente envio algo", data);
//     io.emit('mensaje-del-servidor',data);
//   });
// });

