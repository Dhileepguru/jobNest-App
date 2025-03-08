import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Import Firebase Auth

const firebaseConfig = {
  apiKey: "AIzaSyChk0DDMdsYy1ChCjhsXH9YWE-dzyclVAM",
  authDomain: "jobnest-6f22f.firebaseapp.com",
  projectId: "jobnest-6f22f",
  storageBucket: "jobnest-6f22f.appspot.com",  // Fixed storage bucket format
  messagingSenderId: "279972224332",
  appId: "1:279972224332:web:b3e34641312df8b0fa03e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  // Initialize Firebase Authentication

export { db, auth };  // Export both db and auth
