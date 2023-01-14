import { db } from "../Utility/firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

class MovieProducer{

  constructor(name, email, phoneNumber, address){
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  async create(){

    const movieProducersCollectionRef = collection(db, 'movie-producers');
    await addDoc(movieProducersCollectionRef, {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address
    });

  }

  static async read(){

    const movieProducersCollectionRef = collection(db, 'movie-producers');
    const data = await getDocs(movieProducersCollectionRef);
    return data;

  }

}

export default MovieProducer;