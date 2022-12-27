import { addDoc, collection } from "firebase/firestore";
import { db } from "../Utility/firebase-config";

class ResignationLetter{

  constructor(identifier){
    this.identifier = identifier;
    this.status = 'Pending';
    this.requesterEmail = sessionStorage.getItem('EmployeeEmail');
  }

  async create(){

    const resignationLetterCollectionRef = collection(db, "resignation-letters");

    await addDoc(resignationLetterCollectionRef, {
      ResignationLetterIdentifier: this.identifier,
      ResignationLetterStatus: this.status,
      RequesterEmail: this.requesterEmail
    });
    
  }

}

export default ResignationLetter;
