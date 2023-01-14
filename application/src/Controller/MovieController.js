import Movie from "../Model/Movie";

class MovieController{

  static createMovie(title, description, duration, genre, imageFile){

    let movie = new Movie(title, description, duration, genre, imageFile);
    movie.create();

  }

}

export default MovieController;