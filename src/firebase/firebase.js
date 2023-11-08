// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhBD-MEq7qh29tq2VbKXKhAbXFXrqsxpo",
  authDomain: "portfolio-9cb61.firebaseapp.com",
  projectId: "portfolio-9cb61",
  storageBucket: "portfolio-9cb61.appspot.com",
  messagingSenderId: "281900060864",
  appId: "1:281900060864:web:682898f62c9f909e7edd25",
  measurementId: "G-DRTGNM8QD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);