import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import "./HRManageWarningLetterProposalsView.css";
import WarningLetterController from "../../../Controller/WarningLetterController";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../../View/TableStyle";

const HRManageWarningLetterProposalsView = () => {

  const [file, setFile] = useState(null);
  const [warningLetters, setWarningLetters] = useState([]);

  const [email, setEmail] = useState('');

  let data = [];

  const handleCreateWarningLetter = (e) => {

    e.preventDefault();
    if (file == null) return;

    WarningLetterController.createWarningLetter(file, email);
    alert("File Uploaded");

  }

  useEffect(() => {

    const getWarningLetters = async () => {

      const databaseData = await WarningLetterController.getWarningLetters();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setWarningLetters(temp);

    }

    getWarningLetters();

  }, []);

  warningLetters.map((item) => {

    data.push({
      id: item.identifier,
      status: item.status,
      employeeEmail: item.employeeEmail,
      action: <a className="view-link" href={item.fileURL} target="_blank">View</a>
    });

  });

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
      name: 'Employee Email',
      selector: row => row.employeeEmail,
      sortable: true
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: false
    },
  ];

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
    <div className="hr-manage-warning-letter-proposals-view">

      <Header title={"Propose Warning Letter"} />
      
      <div className="container">

        <form action="" className="file-input">
          <input type="file" onChange={ e => {setFile(e.target.files[0])} } />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} 
          placeholder="... Employee Email" id="email-input"/>
          <button onClick={ handleCreateWarningLetter } id="submit-button">Submit Warning Letter</button>
        </form>

        <br /><br /><br /><br />
        <DataTable className="data-table" columns={columns} data={data} customStyles={tableStyle} theme='tableTheme' />

      </div>

    </div>
  );
}
 
export default HRManageWarningLetterProposalsView;