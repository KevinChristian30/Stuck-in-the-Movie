import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDbh761ZliFtK8g7G2fXra5ZLbh19Q6ps",
  authDomain: "stuck-in-the-movie-a2fac.firebaseapp.com",
  projectId: "stuck-in-the-movie-a2fac",
  storageBucket: "stuck-in-the-movie-a2fac.appspot.com",
  messagingSenderId: "301736861316",
  appId: "1:301736861316:web:9e2392c4fbe4157347acd1",
  measurementId: "G-T7PE4TBH92"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
