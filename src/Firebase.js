// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9_3QBSNZCL9aqOlHzSTvyBXaTbfwWFQw",
  authDomain: "final-project-8a9cc.firebaseapp.com",
  projectId: "final-project-8a9cc",
  storageBucket: "final-project-8a9cc.appspot.com",
  messagingSenderId: "510679227058",
  appId: "1:510679227058:web:e7427f441c5d491813c7ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
