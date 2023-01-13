import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../Utility/firebase-config";

class Receipt{

  constructor(id, file){  
    this.facilityRequestID = id;
    this.file = file;
  }

  async create(){

    const receiptsCollectionRef = collection(db, "receipts");
    const fileRef = ref(storage, 'receipts/' + this.facilityRequestID);

    await uploadBytes(fileRef, this.file);

    await addDoc(receiptsCollectionRef, {
      facilityRequestID: this.facilityRequestID,
      fileURL: await getDownloadURL(fileRef)
    });
    
  }

}

export default Receipt;