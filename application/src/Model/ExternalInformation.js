import { v4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../Utility/firebase-config";

class ExternalInformation{

  constructor(name, type, file){
    this.name = name;
    this.identifier = v4();
    this.type = type;
    this.file = file;
  }

  async create(){

    const externalInformationCollectionRef = collection(db, "external-informations");
    const fileRef = ref(storage, 'external-information/' + this.identifier);

    await uploadBytes(fileRef, this.file);

    await addDoc(externalInformationCollectionRef, {
      name: this.name,
      identifier: this.identifier,
      partnerType: this.type,
      fileURL: await getDownloadURL(fileRef)
    });
    
  }

}

export default ExternalInformation;