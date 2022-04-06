// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClfKI9hS-pacr-rWftt0dGwLv-Vc5iwIQ",
  authDomain: "react-twitter-clone-973d8.firebaseapp.com",
  projectId: "react-twitter-clone-973d8",
  storageBucket: "react-twitter-clone-973d8.appspot.com",
  messagingSenderId: "17603061307",
  appId: "1:17603061307:web:c8d092283c1eff89959e1e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };