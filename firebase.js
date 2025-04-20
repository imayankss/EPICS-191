// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0wqRlNSlBjTgpGkqLjAho3asKI9R-ihE",
  authDomain: "epics-191.firebaseapp.com",
  projectId: "epics-191",
  storageBucket: "epics-191.firebasestorage.app",
  messagingSenderId: "197515636132",
  appId: "1:197515636132:web:20f1b200cd59581687e531",
  measurementId: "G-Q2P5XT6CQH"
};

// Initialize Firebase
import { getApps, getApp } from "firebase/app";

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)
// const analytics = getAnalytics(app);

module.exports = {db}