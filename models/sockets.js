const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.ticketList = new TicketList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("cliente conectado!");
      socket.on("request-ticket", (data, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });
    });
  }
}
module.exports = Sockets;
