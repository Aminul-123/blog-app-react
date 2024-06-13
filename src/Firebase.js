// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs30WRpkCuRPcvjqhKPV1m3u-nik-ypuk",
  authDomain: "react-firebase-project-b0053.firebaseapp.com",
  projectId: "react-firebase-project-b0053",
  storageBucket: "react-firebase-project-b0053.appspot.com",
  messagingSenderId: "1037765661105",
  appId: "1:1037765661105:web:cb2867f43354b704af6d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app) 
 export const db = getFirestore(app)