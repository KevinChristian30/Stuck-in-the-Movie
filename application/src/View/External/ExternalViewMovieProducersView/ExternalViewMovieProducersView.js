import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import PartnerController from "../../../Controller/PartnerController";
import "./ExternalViewMovieProducersView.css"
import DataTable, { createTheme } from "react-data-table-component";
import Expanded from "../../../Components/Expanded/Expanded";
import { tableStyle } from "../../TableStyle";

const ExternalViewMovieProducersView = () => {

  const [movieProducers, setMovieProducers] = useState([]);

  let data = [];

  useEffect(() => {

    const getMovieProducers = async () => {
      
      const databaseData = await PartnerController.getMovieProducers();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setMovieProducers(temp);

    }
    
    getMovieProducers();

  }, []);

  movieProducers.map(e => {

    data.push({
      id: e.id,
      email: e.email,
      address: e.address,
      name: e.name,
      phoneNumber: e.phoneNumber
    });

  });

  const columns = [
    {
      name: 'Request ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
  ];

  const expand = (data) => {

    return( 
      <div className="expand-container">
        <Expanded text={'Address: ' + data.address} />
        <Expanded text={'Phone Number: ' + data.phoneNumber} />
      </div>
    )

  }

  createTheme('tableTheme', {
    text: {
      primary: 'white',
    },
    background: {
      default: '#221F1F',
    },
    context: {
      background: '#221F1F',
      text: '#FFFFFF',
    },
    divider: {
      default: '#F5F5F1',   
    },
  }, 'dark');

  return ( 
    <div className="external-view-movie-producers-view">

      <Header title={'View Movie Producers'} />

      <div className="container">

        <DataTable columns={columns} data={data} theme={'tableTheme'} customStyles={tableStyle} expandableRows expandableRowsComponent={
              (row) => {
                return expand(row.data) 
              }
          } />

      </div>

    </div>
   );
}
 
export default ExternalViewMovieProducersView;