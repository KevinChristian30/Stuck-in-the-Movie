import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../Utility/firebase-config";
import { v4 } from 'uuid';

class WarningLetter{

  constructor(file){
    this.identifier = v4();
    this.status = 'Pending';
    this.file = file;
  }

  async create(){

    const warningLetterCollectionRef = collection(db, "warning-letters");
    const fileRef = ref(storage, 'warning-letter/' + this.identifier);

    await uploadBytes(fileRef, this.file);

    await addDoc(warningLetterCollectionRef, {
      identifier: this.identifier,
      status: this.status,
      fileURL: await getDownloadURL(fileRef)
    });

  }

  static async read(){

    const warningLetterCollectionRef = collection(db, "warning-letters");
    const data = await getDocs(warningLetterCollectionRef);
    return data;

  }

  static async updateStatus(id, status){

    const toUpdate = {status: status};
    const warningLetterDoc = doc(db, 'warning-letters', id);
    await updateDoc(warningLetterDoc, toUpdate);

  }

}

export default WarningLetter;

