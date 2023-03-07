const { v4: uuidv4 } = require("uuid");

class Ticket {
  constructor(number) {
    this.id = uuidv4();
    this.number = number;
    this.escritorio = null;
    this.asesor = null;
  }
}

module.exports = Ticket;
