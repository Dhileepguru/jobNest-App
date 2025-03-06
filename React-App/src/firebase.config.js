  // Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyChk0DDMdsYy1ChCjhsXH9YWE-dzyclVAM",
  authDomain: "jobnest-6f22f.firebaseapp.com",
  projectId: "jobnest-6f22f",
  storageBucket: "jobnest-6f22f.firebasestorage.app",
  messagingSenderId: "279972224332",
  appId: "1:279972224332:web:b3e34641312df8b0fa03e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};