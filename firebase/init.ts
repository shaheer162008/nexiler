// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACOf0RH7rmVnvPKj3lIl69JK4pXZA1vrg",
  authDomain: "blogs-nexiler.firebaseapp.com",
  projectId: "blogs-nexiler",
  storageBucket: "blogs-nexiler.firebasestorage.app",
  messagingSenderId: "246637322322",
  appId: "1:246637322322:web:811f2ce975051795a67f8b",
  measurementId: "G-X17Q8D7VPC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);