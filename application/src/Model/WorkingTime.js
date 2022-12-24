import { addDoc, collection } from "firebase/firestore";
import { db } from "../Utility/firebase-config";

class WorkingTime{

  constructor(email){
    this.email = email;
    this.monday = 'Morning';
    this.tuesday = 'Morning';
    this.wednesday = 'Morning';
    this.thursday = 'Morning';
    this.friday = 'Morning';
    this.saturday = 'Morning';
    this.sunday = 'Morning';
  }

  async create(){

    const workingTimesCollectionRef = collection(db, "working-times");

    await addDoc(workingTimesCollectionRef, {
      email: this.email,
      monday: this.monday,
      tuesday: this.tuesday, 
      wednesday: this.wednesday, 
      thursday: this.thursday, 
      friday: this.friday, 
      saturday: this.saturday, 
      sunday: this.sunday
    });

  }

}

export default WorkingTime;