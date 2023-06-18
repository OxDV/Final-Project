import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9_3QBSNZCL9aqOlHzSTvyBXaTbfwWFQw",
  authDomain: "final-project-8a9cc.firebaseapp.com",
  projectId: "final-project-8a9cc",
  storageBucket: "final-project-8a9cc.appspot.com",
  messagingSenderId: "510679227058",
  appId: "1:510679227058:web:e7427f441c5d491813c7ab",
  databaseURL:
    "https://final-project-8a9cc-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default database;
