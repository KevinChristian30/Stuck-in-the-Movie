import Movie from "../Model/Movie";

class MovieController{

  static createMovie(title, description, duration, genre, imageFile){

    let movie = new Movie(title, description, duration, genre, imageFile);
    movie.create();

  }

  static async getMovies(){

    return await Movie.read();

  }

}

export default MovieController;