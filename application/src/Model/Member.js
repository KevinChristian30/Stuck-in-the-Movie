import { db } from "../Utility/firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { DateGenerator } from "../Utility/DateGenerator"

class Member{

  constructor(name, gender, email, phoneNumber, address, dateOfBirth, paymentMethod) {
    this.name = name;
    this.gender = gender;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.memberSince = DateGenerator.getInstance().getCurrentDate();
    this.points = 0;
    this.paymentMethod = paymentMethod;
  }

  async create(){

    const membersCollectionRef = collection(db, 'members')
    await addDoc(membersCollectionRef, {
      name: this.name,
      gender: this.gender,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      dateOfBirth: this.dateOfBirth,
      memberSince: this.memberSince,
      points: this.points,
      paymentMethod: this.paymentMethod
    });

  }

  static async read(){

    const membersCollectionRef = collection(db, 'members')
    const data = await getDocs(membersCollectionRef);
    return data;

  }

}

export default Member;