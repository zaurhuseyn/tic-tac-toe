// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6VIxtjoYfZpCQy90_hxvroSwDC5_aWRs",
  authDomain: "tic-tac-toe-e1d9d.firebaseapp.com",
  projectId: "tic-tac-toe-e1d9d",
  storageBucket: "tic-tac-toe-e1d9d.appspot.com",
  messagingSenderId: "749335889735",
  appId: "1:749335889735:web:0e3d7b7fe02e24d4702e62",
  measurementId: "G-SJ8PE26M1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);