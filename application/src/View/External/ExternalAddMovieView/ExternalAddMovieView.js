import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import "./ExternalAddMovieView.css";
import PartnerController from "../../../Controller/PartnerController";
import MovieController from "../../../Controller/MovieController";

const ExternalAddMovieView = () => {

  const [movieProducers, setMovieProducers] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [genre, setGenre] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [movieProducer, setMovieProducer] = useState('');

  const handleAddMovie = (e) => {

    e.preventDefault();
    MovieController.createMovie(title, description, duration, genre, imageFile);
    alert('Movie Created');

  }

  useEffect(() => {

    const getMovieProducers = async () => {

      const databaseData = await PartnerController.getMovieProducers();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setMovieProducers(temp);

    }

    getMovieProducers();

  }, []);

  const getMovieProducersOptions = () => {

    return (<select name="add-employee-department" id="add-employee-department" 
              value={movieProducer} onChange={e => {setMovieProducer(e.target.value)}}>
              {
                movieProducers.map(e => {
                  return <option key={e.id} value={e.name}>{e.name}</option>
                })
              }
            </select>
    );

  }

  return ( 
    <div className="external-add-movie-view">

      <Header title="Add Movie" />

      <div className="add-employee">
        
        <form action="" id="add-employee-form" onSubmit={handleAddMovie}>
          <h1 id="title">Add Movie</h1>
          <br />  
          <div className="add-employee-input-container">    
            <label htmlFor="add-employee-name">Title</label>
            <input type="text" name="add-employee-name" id="add-employee-name" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-address">Description</label>
            <textarea id="add-employee-address" value={description} onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-address">Duration</label>
            <input type="number" value={duration} onChange={e => setDuration(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-address">Genre</label>
            <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-address">Image</label>
            <input type="file" onChange={e => setImageFile(e.target.files[0])} />
          </div>
          <div className="add-employee-input-container">
            <label htmlFor="add-employee-address">Movie Producer</label>
            
            { getMovieProducersOptions() }

          </div>
          <div className="add-employee-input-container">
            <button id="add-employee-submit-button">Add Movie</button>
          </div>
        </form>
      </div>

    </div>
   );
}
 
export default ExternalAddMovieView;