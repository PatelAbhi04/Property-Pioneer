// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  "AIzaSyADqRcc8yCDgn-g6cts26VXLAD8ow_i-s0",
  authDomain: "mern-estate-ffa5f.firebaseapp.com",
  projectId: "mern-estate-ffa5f",
  storageBucket: "mern-estate-ffa5f.appspot.com",
  messagingSenderId: "543147934879",
  appId: "1:543147934879:web:7e634fff94152f43d0ceaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);