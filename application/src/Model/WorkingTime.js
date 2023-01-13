import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
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

  static async read(){

    const workingTimesCollectionRef = collection(db, "working-times");
    const data = await getDocs(workingTimesCollectionRef);
    return data;

  }

  static async updateWorkingTime(id, monday, tuesday, wednesday, thursday, friday, saturday, sunday){

    const toUpdate = {
                      monday: monday, 
                      tuesday: tuesday, 
                      wednesday: wednesday,
                      thursday: thursday,
                      friday: friday,
                      saturday: saturday,
                      sunday: sunday
                    };
    const workingTimeDoc = doc(db, 'working-times', id);
    await updateDoc(workingTimeDoc, toUpdate);

  }

}

export default WorkingTime;