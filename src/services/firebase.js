// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw1qtNlEtdLCB73ra0SK0czegG6XQK8IU",
  authDomain: "dimedash-19420.firebaseapp.com",
  projectId: "dimedash-19420",
  storageBucket: "dimedash-19420.appspot.com",
  messagingSenderId: "461418340942",
  appId: "1:461418340942:web:9d1b77f57f55b4f3ced91f",
  measurementId: "G-JK18XSE7LY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app
