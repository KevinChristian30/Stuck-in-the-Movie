import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Header from "../../../Components/Header/Header";
import { db, storage } from "../../../Utility/firebase-config";
import { tableStyle } from "../../TableStyle";
import "./ManagerManageEmployeesResignationProposalsView.css";

const ManagerManageEmployeesResignationProposalsView = () => {

  const [resignationLetters, setResignationLetters] = useState([]);
  const [resignationLettersCollection, setResignationLettersCollection] = useState([]);

  let displayedLetter = {};
  const [itemsToURL, setItemsToURL] = useState({});

  let data = [];

  useEffect(() => {

    const getResignationLettersCollection = async () => {

      const resignationLettersCollectionRef = collection(db, 'resignation-letters');
      const data = await getDocs(resignationLettersCollectionRef);
      const temp = data.docs.map(doc => ({...doc.data(), id: doc.id}));
      setResignationLettersCollection(temp);

      temp.map(resignationLetter => {
      
        const imageListRef = ref(storage, `resignation-letter/${resignationLetter.RequesterEmail}` + '/');
        listAll(imageListRef).then(response => {
    
          response.items.forEach((item) => {
            
            setResignationLetters(prev => [...prev, item]);
            
            getDownloadURL(item).then(url => {
      
              const newItem = {};
              newItem[item.name] = url;
      
              setItemsToURL(itemsToURL => ({
                ...itemsToURL,
                ...newItem
              }))

            });
          });
  
        });
      });
  
    } 
    
    getResignationLettersCollection();
  
  }, []);

  const getStatus = (item) => {

    for (let i = 0; i < resignationLettersCollection.length; i++){
      if (item.name == resignationLettersCollection[i].ResignationLetterIdentifier) 
      return resignationLettersCollection[i].ResignationLetterStatus;
    }
  
  }

  const columns = [
    {
        name: 'Letter ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: true,
    },
  ];
  
  resignationLetters.map((item) => {
    if (!displayedLetter[item]){
      displayedLetter[item] = true;

      data.push({
        id: item.name,
        status: getStatus(item),
        action: <a className="view-link" href={itemsToURL[item.name]} target="_blank">View</a>
      });
  
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
    <div className="manager-manage-employees-resignation-proposal-view">
      <Header title="Employee Resignation Proposals" />

      <div className="data-display">
        <DataTable className="data-table" columns={columns} data={data} customStyles={tableStyle} theme={'tableTheme'} />
      </div>

    </div>
  );
}

export default ManagerManageEmployeesResignationProposalsView;
