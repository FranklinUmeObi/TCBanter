import firebase from "firebase";
import "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "tcd-tringles.firebaseapp.com",
    projectId: "tcd-tringles",
    storageBucket: "tcd-tringles.appspot.com",
    messagingSenderId: "790690833933",
    appId: "1:790690833933:web:b59ce9b7ac4db649fb5744",
    measurementId: "G-KSBEVPEEXY"
  };
 
  const fireBaseApp = firebase.initializeApp(firebaseConfig);

  export default fireBaseApp.firestore();