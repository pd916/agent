// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQPoqlCplXGbTHayo9WdBTgbCQdku4oMk",
  authDomain: "prep-interview-16441.firebaseapp.com",
  projectId: "prep-interview-16441",
  storageBucket: "prep-interview-16441.firebasestorage.app",
  messagingSenderId: "776568970438",
  appId: "1:776568970438:web:438c6bbf0627f5ccbd8bc7",
  measurementId: "G-TXDCY98FMY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
