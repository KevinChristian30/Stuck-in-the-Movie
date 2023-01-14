import Header from "../../../Components/Header/Header";

const MovieScheduleGenerateMovieSchedulesView = () => {

  // Input: Movie(s), Branch, Weight (Movie 1 misalnya 1, Movie2 misalnya 2, berarti movie 2 lebih sering muncul)

  // Output: RoomX, MovieX, harus ada jadwal buat setiap ruangan setiap harinya, misalnya setiap hari jam 10, 14, dan 18 kalo udh tinggal di random, kemungkinan kita perlu beberapa hal lain, penting buat gambarin logicnya sampe org beli ticket

  return ( 
    <div className="movie-schedule-generate-movie-schedules-view">

      <Header title={'Generate Movie Schedule'} />

    </div>
   );
}
 
export default MovieScheduleGenerateMovieSchedulesView;