// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo7xnImiLe4zOON0aSGvk0XO7AAyYlc2w",
  authDomain: "voyager-f1bd8.firebaseapp.com",
  projectId: "voyager-f1bd8",
  storageBucket: "voyager-f1bd8.appspot.com",
  messagingSenderId: "840405099297",
  appId: "1:840405099297:web:8ed60d4cb5060a0eb19460",
  measurementId: "G-CLTHEXW339",
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fb);

export { fb };
