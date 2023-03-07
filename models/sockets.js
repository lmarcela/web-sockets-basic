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

      socket.on("next-ticket-to-do", ({ asesor, escritorio }, callback) => {
        const ticket = this.ticketList.assignTicket(asesor, escritorio);
        callback(ticket);
      });
    });
  }
}
module.exports = Sockets;
