import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../Utility/firebase-config";
import { v4 } from 'uuid';

class Movie{

  constructor(title, description, duration, genre, imageFile){
    this.identifier = v4();
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.genre = genre;
    this.imageFile = imageFile;
  }

  async create(){

    const moviesCollectionRef = collection(db, "movies");
    const fileRef = ref(storage, 'movies/' + this.identifier);

    await uploadBytes(fileRef, this.imageFile);

    await addDoc(moviesCollectionRef, {
      identifier: this.identifier,
      title: this.title,
      description: this.description,
      duration: this.duration,
      genre: this.genre,
      imageURL: await getDownloadURL(fileRef)
    });

  }

}

export default Movie;
