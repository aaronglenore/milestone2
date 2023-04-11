// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4SIYVFSnpjpbXBuVHaLeL-1zu-snZl3I",
  authDomain: "webapps-todo-list.firebaseapp.com",
  projectId: "webapps-todo-list",
  storageBucket: "webapps-todo-list.appspot.com",
  messagingSenderId: "214218780403",
  appId: "1:214218780403:web:afa122d4b4880ac451d186",
  measurementId: "G-JE95KQWXX9"
};

// Initialize Firebase
const firebaseconfiginit = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseconfiginit;