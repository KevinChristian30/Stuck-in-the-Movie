import { collection, addDoc } from "firebase/firestore";
import { db } from "../Utility/firebase-config";

class AdvertisementPartner{

  constructor(name, email, phoneNumber, address){
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  async create(){

    const advertisementPartnersCollectionRef = collection(db, 'ad-partners');
    await addDoc(advertisementPartnersCollectionRef, {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address
    });

  }

}

export default AdvertisementPartner;