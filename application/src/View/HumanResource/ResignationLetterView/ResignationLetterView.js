import { useState, useEffect } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import "./ResignationLetterView.css";
import { db } from "../../../Utility/firebase-config";
import ResignationLetterController from "../../../Controller/ResignationLetterController";
import { collection, getDocs } from "firebase/firestore";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../TableStyle";

const ResignationLetterView = () => {

  const [file, setFile] = useState(null);
  const [resignationLetters, setResignationLetters] = useState([]);

  let displayedLetter = {};
  let data = [];

  const handleCreateResignationLetter = (e) => {

    e.preventDefault();
    if (file == null) return;

    ResignationLetterController.createResignationLetter(file);
    alert("File Uploaded");

  }

  useEffect(() => {

    const getResignationLetters = async () => {

      const resignationLettersRef = collection(db, 'resignation-letters');
      const data = await getDocs(resignationLettersRef);
      setResignationLetters(data.docs.map(doc => ({...doc.data(), id: doc.id})));

    }

    getResignationLetters();

  }, []); 

  const columns = [
    {
        name: 'Letter ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: false
    },
  ];

  resignationLetters.map((item) => {
    if (!displayedLetter[item.identifier]){
      displayedLetter[item.identifier] = true;
      if (item.requesterEmail === sessionStorage.getItem('EmployeeEmail')){
        
        data.push({
          id: item.identifier,
          status: item.status,
          action: <a className="view-link" href={item.fileURL} target="_blank">View</a>
        });
      }

    }
  })

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

    <div className="resignation-letter">

      <NavBar />
      <br /><br /><br /><br /><br />
      <Title title="Resignation Letter"/>
      <div className="container">
        
          <DataTable className="data-table" columns={columns} data={data} customStyles={tableStyle} theme='tableTheme' />

          <form action="" className="file-input">
            <input type="file" onChange={ e => {setFile(e.target.files[0])} } />
            <button onClick={ handleCreateResignationLetter } id="submit-button">Submit Resignation Letter</button>
          </form>
      </div>
      
    </div>

   );
}
 
export default ResignationLetterView;