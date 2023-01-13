import { db } from "../Utility/firebase-config";
import { addDoc, collection } from "firebase/firestore";

class Supplier{

  constructor(name, email, phoneNumber, address){
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  async create(){

    const suppliersCollectionRef = collection(db, 'suppliers');
    await addDoc(suppliersCollectionRef, {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address
    });

  }

}

export default Supplier;