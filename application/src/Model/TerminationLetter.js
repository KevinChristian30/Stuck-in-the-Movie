import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../Utility/firebase-config";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { v4 } from "uuid";

class TerminationLetter{

  constructor(file){
    this.identifier = v4();
    this.status = 'Pending';
    this.file = file;
  }

  async create(){

    const terminationLetterCollectionRef = collection(db, "termination-letters");
    const fileRef = ref(storage, 'termination-letter/' + this.identifier);

    await uploadBytes(fileRef, this.file);

    await addDoc(terminationLetterCollectionRef, {
      identifier: this.identifier,
      status: this.status,
      fileURL: await getDownloadURL(fileRef)
    });
    
  }

  static async read(){

    const terminationLetterCollectionRef = collection(db, "termination-letters");
    const data = await getDocs(terminationLetterCollectionRef);
    return data;

  }

  static async updateStatus(id, status){

    const toUpdate = {status: status};
    const terminationLetterDoc = doc(db, 'termination-letters', id);
    await updateDoc(terminationLetterDoc, toUpdate);

  }

}

export default TerminationLetter;