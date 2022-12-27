import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWKWvCcPHPLhXpEWsEi9PwzqZW3JLzP38",
  authDomain: "linkedin-clone-8c8d2.firebaseapp.com",
  projectId: "linkedin-clone-8c8d2",
  storageBucket: "linkedin-clone-8c8d2.appspot.com",
  messagingSenderId: "778445800498",
  appId: "1:778445800498:web:8c017a17adf1bd1d33282b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
