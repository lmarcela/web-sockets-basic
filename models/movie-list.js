class MovieList {
  constructor() {
    this.movies = [
      new Movie("Regreso al futuro"),
      new Movie("Como si fuera la primera vez"),
      new Movie("Son como niños"),
      new Movie("Una pareja explosiva"),
      new movie("Amigos intocables"),
    ];
  }

  addMovie(name) {
    const newMovie = new Movie(name);
    this.movies.push(newMovie);
    return this.movies;
  }

  removeMovies(id) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  getMovies() {
    return this.movies;
  }

  increaseVotes(id) {
    this.movies = this.movies.map((movie) => {
      if (movie.id === id) {
        movie.votes += 1;
      }
      return movie;
    });
  }

  changeName(id, newName) {
    this.movies = this.movies.map((movie) => {
      if (movie.id === id) {
        movie.name = newName;
      }
      return movie;
    });
  }
}
