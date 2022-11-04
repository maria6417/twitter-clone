// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDumK5cgX-bjgIpZORy9mgZG9AYY83HwDM",
  authDomain: "twitter-clone-45bb0.firebaseapp.com",
  projectId: "twitter-clone-45bb0",
  storageBucket: "twitter-clone-45bb0.appspot.com",
  messagingSenderId: "700903596991",
  appId: "1:700903596991:web:56d4748e6f6a108490b70a",
  measurementId: "G-W0J4NLGJ20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();

export default db;
