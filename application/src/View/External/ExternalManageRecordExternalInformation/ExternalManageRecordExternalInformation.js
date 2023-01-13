import { useState } from "react";
import Header from "../../../Components/Header/Header";
import ExternalInformationController from "../../../Controller/ExternalInformationController";
import "./ExternalManageRecordExternalInformation.css"

const ExternalManageRecordExternalInformation = () => {

  const [file, setFile] = useState(null);
  const [division, setDivision] = useState('');
  const [name, setName] = useState('');
  const [externalInformations, setExternalInformations] = useState([]);

  let displayedLetter = {};
  let data = [];

  const handleCreateExternalInformation = (e) => {

    e.preventDefault();
    if (file == null) return;

    ExternalInformationController.createExternalInformation(name, division, file);
    alert("File Uploaded");

  }

  // useEffect(() => {

  //   const getExternalInformations = async () => {
      
  //     const databaseData = await ExternalInformationController.getExternalInformations();
  //     const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
  //     setExternalInformations(temp);

  //   }
    
  //   getExternalInformations();

  // }, []); 

  // const columns = [
  //   {
  //       name: 'Letter ID',
  //       selector: row => row.id,
  //       sortable: true,
  //   },
  //   {
  //       name: 'Status',
  //       selector: row => row.status,
  //       sortable: true
  //   },
  //   {
  //     name: 'Action',
  //     selector: row => row.action,
  //     sortable: false
  //   },
  // ];

  // resignationLetters.map((item) => {
  //   if (!displayedLetter[item.identifier]){
  //     displayedLetter[item.identifier] = true;
  //     if (item.requesterEmail === sessionStorage.getItem('EmployeeEmail')){
        
  //       data.push({
  //         id: item.identifier,
  //         status: item.status,
  //         action: <a className="view-link" href={item.fileURL} target="_blank">View</a>
  //       });
  //     }

  //   }
  // })

  // createTheme('tableTheme', {
  //   text: {
  //     primary: 'white',
  //   },
  //   background: {
  //     default: '#221F1F',
  //   },
  //   context: {
  //     background: '#221F1F',
  //     text: '#FFFFFF',
  //   },
  //   divider: {
  //     default: '#F5F5F1',
  //   },
  // }, 'dark');

  return ( 
    <div className="external-manage-record-external-information">

      <Header title={'Record External Party Information'} />

      <div className="container">
      <form action="" className="file-input">
        <input type="file" onChange={ e => {setFile(e.target.files[0])} } />
        <input type="text" className="name" value={name} onChange={ e => setName(e.target.value) } placeholder="Partner Name" />
        <select value={division} onChange={e => {setDivision(e.target.value)}}>
              <option value="-">-</option>
              <option value="Advertisement Partner">Advertisement Partner</option>
              <option value="Movie Producer">Movie Producer</option>
              <option value="Supplier">Supplier</option>
        </select>
        <button onClick={ handleCreateExternalInformation } id="submit-button">Submit Communication</button>
      </form>
      </div>

    </div>
   );
}
 
export default ExternalManageRecordExternalInformation;

  

 
  

  // return ( 

  //   <div className="resignation-letter">

  //     <NavBar />
  //     <br /><br /><br /><br /><br />
  //     <Title title="Resignation Letter"/>
  //     <div className="container">
        
  //         <DataTable className="data-table" columns={columns} data={data} customStyles={tableStyle} theme='tableTheme' />

          
  //     </div>
      
  //   </div>

  //  );