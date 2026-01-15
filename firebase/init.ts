import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHEsqeFOL5gjGjNaiDPL8wqfnYKfNZJsA",
  authDomain: "virtuo-edge.firebaseapp.com",
  projectId: "virtuo-edge",
  storageBucket: "virtuo-edge.firebasestorage.app",
  messagingSenderId: "241072798540",
  appId: "1:241072798540:web:b44b76f9e231960e766de9",
  measurementId: "G-YDWF5X1WZQ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);