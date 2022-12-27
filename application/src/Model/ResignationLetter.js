import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../Utility/firebase-config";
import { v4 } from 'uuid';

class ResignationLetter{

  constructor(file){
    this.identifier = v4();
    this.status = 'Pending';
    this.requesterEmail = sessionStorage.getItem('EmployeeEmail');
    this.file = file;
  }

  async create(){

    const resignationLetterCollectionRef = collection(db, "resignation-letters");
    const fileRef = ref(storage, `resignation-letter/${sessionStorage.getItem('EmployeeEmail') + '/' + this.identifier}`);

    await uploadBytes(fileRef, this.file);

    await addDoc(resignationLetterCollectionRef, {
      identifier: this.identifier,
      status: this.status,
      requesterEmail: this.requesterEmail,
      fileURL: await getDownloadURL(fileRef)
    });
    
  }

  static async read(){

    const resignationLetterCollectionRef = collection(db, "resignation-letters");
    const data = await getDocs(resignationLetterCollectionRef);
    return data;

  }

}

export default ResignationLetter;