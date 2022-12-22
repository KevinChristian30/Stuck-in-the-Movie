import { useState, useEffect } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Title from "../../../Components/Title/Title";
import "./ResignationLetterView.css";
import { storage } from "../../../Utility/firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';
import ResignationLetterController from "../../../Controller/ResignationLetterController";
import ResignationLetterCard from "../../../Components/ResignationLetterCard/ResignationLetterCard";
import DataTable from "react-data-table-component";

const ResignationLetterView = () => {

  const [file, setFile] = useState(null);
  const [resignationLetters, setResignationLetters] = useState([]);

  const imageListRef = ref(storage, `resignation-letter/${global.CurrentUser.EmployeeEmail}` + '/');

  let displayedLetter = {};
  let c = 1;

  const uploadImage = (e) => {

    e.preventDefault()
    if (file == null) return;

    const identifier = v4();

    const fileRef = ref(storage, `resignation-letter/${global.CurrentUser.EmployeeEmail + '/' + identifier}`);
    uploadBytes(fileRef, file).then(() => {

      ResignationLetterController.createResignationLetter(identifier);
      alert("File Uploaded");

    })

  }

  useEffect(() => {

    listAll(imageListRef).then(response => {

      response.items.forEach((item) => {
        
        getDownloadURL(item).then((url) => {
          setResignationLetters(prev => [...prev, url]);
        });

      });

    });

  }, []); 

  return ( 

    <div className="resignation-letter">

      <div className="container">
        <NavBar />
        <br /><br /><br /><br /><br />
          <Title title="My Resignation Letters"/>
          <form action="" className="file-input">
            <input type="file" onChange={ e => {setFile(e.target.files[0])} } />
            <button onClick={ uploadImage } id="submit-button">Submit Resignation Letter</button>
          </form>
      </div>

      {
        resignationLetters.map((url) => {
          if (!displayedLetter[url]){
            displayedLetter[url] = true;
            return <ResignationLetterCard key={url} url={url} identifier={'asd'} count={c++}/>
          }
        })
      }
      
    </div>

   );
}
 
export default ResignationLetterView;