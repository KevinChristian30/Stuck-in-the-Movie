import { useState, useEffect, useLayoutEffect } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import "./ResignationLetterView.css";
import { db, storage } from "../../../Utility/firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';
import ResignationLetterController from "../../../Controller/ResignationLetterController";
import ResignationLetterCard from "../../../Components/ResignationLetterCard/ResignationLetterCard";
import { collection, getDocs } from "firebase/firestore";

const ResignationLetterView = () => {

  const [file, setFile] = useState(null);
  const [resignationLetters, setResignationLetters] = useState([]);
  const [resignationLettersCollection, setResignationLettersCollection] = useState([]);

  const imageListRef = ref(storage, `resignation-letter/${sessionStorage.getItem('EmployeeEmail')}` + '/');

  let displayedLetter = {};
  const [itemsToURL, setItemsToURL] = useState({});
  let c = 1;

  const uploadFile = (e) => {

    e.preventDefault()
    if (file == null) return;

    const identifier = v4();

    const fileRef = ref(storage, `resignation-letter/${sessionStorage.getItem('EmployeeEmail') + '/' + identifier}`);
    uploadBytes(fileRef, file).then((response) => {

      ResignationLetterController.createResignationLetter(identifier);
      alert("File Uploaded");

    })

  }

  useEffect(() => {

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

    const getResignationLettersCollection = async () => {

      const resignationLettersCollectionRef = collection(db, 'resignation-letters');
      const data = await getDocs(resignationLettersCollectionRef);
      setResignationLettersCollection(data.docs.map(doc => ({...doc.data(), id: doc.id})));

    }

    getResignationLettersCollection();

  }, []); 

  const getStatus = (item) => {

    for (let i = 0; i < resignationLettersCollection.length; i++){
      if (item.name == resignationLettersCollection[i].ResignationLetterIdentifier) 
      return resignationLettersCollection[i].ResignationLetterStatus;
    }

  }

  return ( 

    <div className="resignation-letter">

      <div className="container">
        <NavBar />
        <br /><br /><br /><br /><br />
          <Title title="Resignation Letter"/>

          {
            resignationLetters.map((item) => {
              if (!displayedLetter[item]){
                displayedLetter[item] = true;
                return <ResignationLetterCard key={item} status={ getStatus(item) } url={ itemsToURL[item.name] } count={c++}/>
              }
            })
          }

          <form action="" className="file-input">
            <input type="file" onChange={ e => {setFile(e.target.files[0])} } />
            <button onClick={ uploadFile } id="submit-button">Submit Resignation Letter</button>
          </form>
      </div>
      
    </div>

   );
}
 
export default ResignationLetterView;