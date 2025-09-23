// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApm8w-xX1Fz6FrlBwMh87kgk55tK5Gchc",
  authDomain: "netflix-gpt-b889a.firebaseapp.com",
  projectId: "netflix-gpt-b889a",
  storageBucket: "netflix-gpt-b889a.firebasestorage.app",
  messagingSenderId: "127169151872",
  appId: "1:127169151872:web:d5f0d7708a455b05b7f765",
  measurementId: "G-VZ9RFS9BFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
