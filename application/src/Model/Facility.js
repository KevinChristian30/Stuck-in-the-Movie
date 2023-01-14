import { DateGenerator } from "../Utility/DateGenerator";
import { db } from "../Utility/firebase-config";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { v4 } from "uuid";

class Facility{

  constructor(name, description) {
    this.identifier = v4();
    this.name = name;
    this.description = description;
    this.status = 'Normal';
    this.addedDate = DateGenerator.getInstance().getCurrentDate();
  }

  async create(){

    const facilityCollectionRef = collection(db, 'facilities');
    await addDoc(facilityCollectionRef, {
      identifier: this.identifier,
      name: this.name,
      description: this.description,
      status: this.status,
      addedDate: this.addedDate
    });

  }

  static async read(){

    const facilityCollectionRef = collection(db, 'facilities');
    const data = await getDocs(facilityCollectionRef);
    return data;

  }

  static async updateStatus(id, status){

    const toUpdate = {status: status};
    const facilityDoc = doc(db, 'facilities', id);
    await updateDoc(facilityDoc, toUpdate);

  }

  static async updateBrokenDescription(id, description, email){

    const toUpdate = {brokenDescription: description, reporterEmail: email};
    const facilityDoc = doc(db, 'facilities', id);
    await updateDoc(facilityDoc, toUpdate);

  }

}

export default Facility;