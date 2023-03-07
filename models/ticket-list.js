const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;

    this.pendings = [];
    this.assigned = [];
  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  // 3 to be seen on the cards and 10 on the history
  get last13() {
    return this.assigned.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.pendings.push(newTicket);
    return newTicket;
  }

  assignTicket(asesor, escritorio) {
    if (this.pendings.length === 0) {
      return null;
    }

    const nextTicket = this.pendings.shift();

    nextTicket.asesor = asesor;
    nextTicket.escritorio = escritorio;

    this.assigned.unshift(nextTicket);

    return nextTicket;
  }
}

module.exports = TicketList;
