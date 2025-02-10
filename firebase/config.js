// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAolGHT4JRT8Y40skuGxMJNkDQY-XCucRA",
  authDomain: "next-coder-56341.firebaseapp.com",
  projectId: "next-coder-56341",
  storageBucket: "next-coder-56341.firebasestorage.app",
  messagingSenderId: "65786711055",
  appId: "1:65786711055:web:7279062e66f486cf9ee77a",
  measurementId: "G-1FJ06LB6D7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
