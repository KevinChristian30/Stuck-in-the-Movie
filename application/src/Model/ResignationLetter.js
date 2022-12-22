import { addDoc, collection } from "firebase/firestore";
import { db } from "../Utility/firebase-config";

class ResignationLetter{

  constructor(identifier){
    this.identifier = identifier;
    this.status = 'Pending';
  }

  async create(){

    const resignationLetterCollectionRef = collection(db, "resignation-letters");

    await addDoc(resignationLetterCollectionRef, {
      ResignationLetterIdentifier: this.identifier,
      ResignationLetterStatus: this.status
    });
    
  }

}

export default ResignationLetter;
