import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  // Stuck-in-the-Movie api key
  // apiKey: "AIzaSyCDbh761ZliFtK8g7G2fXra5ZLbh19Q6ps",
  // authDomain: "stuck-in-the-movie-a2fac.firebaseapp.com",
  // projectId: "stuck-in-the-movie-a2fac",
  // storageBucket: "stuck-in-the-movie-a2fac.appspot.com",
  // messagingSenderId: "301736861316",
  // appId: "1:301736861316:web:9e2392c4fbe4157347acd1",
  // measurementId: "G-T7PE4TBH92"

  apiKey: "AIzaSyB4pyQu88gCuCkwRgGeWGTg7tm2VklnMqE",
  authDomain: "stuck-in-the-movie-2.firebaseapp.com",
  projectId: "stuck-in-the-movie-2",
  storageBucket: "stuck-in-the-movie-2.appspot.com",
  messagingSenderId: "144517255712",
  appId: "1:144517255712:web:e93e2530efe6919d80e245",
  measurementId: "G-VY1XPLF87S"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
