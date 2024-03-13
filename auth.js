// require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyADLNq8o0THxhT8xyCcsHnpYMBuVP0YnyQ",
  authDomain: "task-management-2432a.firebaseapp.com",
  projectId: "task-management-2432a",
  storageBucket: "task-management-2432a.appspot.com",
  messagingSenderId: "700015275857",
  appId: "1:700015275857:web:df386409d1107fd4bbed70",
  measurementId: "G-72T1DQ731G"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();