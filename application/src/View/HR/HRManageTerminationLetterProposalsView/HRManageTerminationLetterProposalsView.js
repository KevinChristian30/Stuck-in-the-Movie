import { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import DataTable, { createTheme } from "react-data-table-component";
import { tableStyle } from "../../TableStyle";
import TerminationLetterController from "../../../Controller/TerminationLetterController";
import "./HRManageTerminationLetterProposalsView.css";

const HRManageTerminationLetterProposalsView = () => {

  const [file, setFile] = useState(null);
  const [terminationLetters, setTerminationLetters] = useState([]);

  let data = [];

  const handleCreateTerminationLetter = (e) => {

    e.preventDefault();
    if (file == null) return;

    TerminationLetterController.createTerminationLetter(file);
    alert("File Uploaded");

  }

  useEffect(() => {

    const getTerminationLetters = async () => {

      const databaseData = await TerminationLetterController.getTerminationLetters();
      const temp = databaseData.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setTerminationLetters(temp);

    }

    getTerminationLetters();

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

  terminationLetters.map((item) => {

    data.push({
      id: item.identifier,
      status: item.status,
      action: <a className="view-link" href={item.fileURL} target="_blank">View</a>
    });

  });

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
    <div className="hr-manage-termination-letter-proposals-view">

      <Header title={'Propose Termination Letter'} />

      <div className="container">

        <form action="" className="file-input">
          <input type="file" onChange={ e => {setFile(e.target.files[0])} } />
          <button onClick={ handleCreateTerminationLetter } id="submit-button">Submit Termination Letter</button>
        </form>

        <br /><br /><br /><br />
        <DataTable className="data-table" columns={columns} data={data} customStyles={tableStyle} theme='tableTheme' />

      </div>

    </div>
  );
}
 
export default HRManageTerminationLetterProposalsView;

