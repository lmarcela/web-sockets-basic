const { v4: uuidv4 } = require("uuid");

class Movie {
  constructor(name) {
    this.id = uuidv4();
    this.name = name;
    this.votes = 0;
  }
}

module.exports = Movie;
