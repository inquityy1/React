// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9_Mzm-harA4L8p5knvArYe9TcNCxRODA",
  authDomain: "house-marketplace-app-fda73.firebaseapp.com",
  projectId: "house-marketplace-app-fda73",
  storageBucket: "house-marketplace-app-fda73.appspot.com",
  messagingSenderId: "137059418196",
  appId: "1:137059418196:web:94f711b720ad097e7e6dc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
