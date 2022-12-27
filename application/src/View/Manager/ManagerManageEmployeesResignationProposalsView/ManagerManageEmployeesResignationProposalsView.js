import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import AcceptButton from "../../../Components/Buttons/AcceptButton/AcceptButton";
import LinkButton from "../../../Components/Buttons/LinkButton/LinkButton";
import RejectButton from "../../../Components/Buttons/RejectButton/RejectButton";
import Header from "../../../Components/Header/Header";
import { db } from "../../../Utility/firebase-config";
import { tableStyle } from "../../TableStyle";
import "./ManagerManageEmployeesResignationProposalsView.css";

const ManagerManageEmployeesResignationProposalsView = () => {

  const [resignationLetters, setResignationLetters] = useState([]);

  let displayedLetter = {};
  let data = [];

  useEffect(() => {

    const getResignationLetters = async () => {

      const resignationLettersRef = collection(db, 'resignation-letters');
      const data = await getDocs(resignationLettersRef);
      setResignationLetters(data.docs.map(doc => ({...doc.data(), id: doc.id})));

    }

    getResignationLetters();
  
  }, []);

  const handleAccept = () => {
    console.log('Accept');
  }

  const handleReject = () => {
    console.log('Reject');
  }

  resignationLetters.map((item) => {
    if (!displayedLetter[item.identifier]){
      displayedLetter[item.identifier] = true;
      
      data.push({
        id: item.identifier,
        status: item.status,
        action: <div className="action-container">
                  <LinkButton url={item.fileURL} />
                  <AcceptButton onclick={handleAccept} />
                  <RejectButton onclick={handleReject} />
                </div> 
      });

    }
  })

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
      sortable: true
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
    <div className="manager-manage-employees-resignation-proposal-view">
      <Header title="Employee Resignation Proposals" />

      <div className="data-display">
        <DataTable className="data-table" columns={columns} data={data} customStyles={tableStyle} theme={'tableTheme'} />
      </div>

    </div>
  );
}

export default ManagerManageEmployeesResignationProposalsView;
