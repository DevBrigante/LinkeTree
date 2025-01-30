
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB7aQ3VfVyMf04M67k28fdzp74Mjt4TeQk",
  authDomain: "reactlinks-f4b4c.firebaseapp.com",
  projectId: "reactlinks-f4b4c",
  storageBucket: "reactlinks-f4b4c.firebasestorage.app",
  messagingSenderId: "630484898949",
  appId: "1:630484898949:web:d1276fcf3c4af482b045ec"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db };