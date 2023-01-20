import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import MovieController from "../../../Controller/MovieController";
import DataTable from "react-data-table-component";
import { tableStyle } from "../../../View/TableStyle";
import "./MovieScheduleGenerateMovieSchedulesView.css";

const MovieScheduleGenerateMovieSchedulesView = () => {

  // Input: Movie(s), Branch, jumlah hari

  // Output: RoomX, MovieX, harus ada jadwal buat setiap ruangan setiap harinya, misalnya setiap hari jam 10, 14, dan 18 kalo udh tinggal di random, kemungkinan kita perlu beberapa hal lain, penting buat gambarin logicnya sampe org beli ticket

  const [movies, setMovies] = useState([]);

  let moviesData = [];

  useEffect(() => {

    const getMovies = async () => {
      
      const databaseData = await MovieController.getMovies();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setMovies(temp);

    }
    
    getMovies();

  }, []);

  movies.map(e => {

    moviesData.push({
      title: e.title,
      image: <div className="image-container">
               <img src={e.imageURL} alt="" />
             </div>,
      checkbox: <input type="checkbox" className="cbx" id={e.id} />
    });    

  });

  const columns = [
    {
      name: 'Movie Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Movie Image',
      selector: row => row.image
    },
    {
      name: 'Select',
      selector: row => row.checkbox
    }
  ]

  const handleGenerateSchedule = () => {

    movies.map(e => {

      // if (document.getElementById('#' + e.id).checked) console.log(e.title)
      console.log(document.getElementById('#' + e.id));

    });

  }

  return ( 
    <div className="movie-schedule-generate-movie-schedules-view">

      <Header title={'Generate Movie Schedule'} />

      <div className="container">
        <DataTable columns={columns} data={moviesData} theme={'tableTheme'} customStyles={tableStyle} />
        <br />
        <button id="submit-button" type="button" onClick={handleGenerateSchedule}>Generate Schedule</button>
      </div>

      <br /><br /><br /><br /><br />

    </div>
   );
}
 
export default MovieScheduleGenerateMovieSchedulesView;