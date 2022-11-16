import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC9I6egwwdUUrgDyh9tjAFykxnZLKYyUF8",
    authDomain: "weblab4-faketinder.firebaseapp.com",
    projectId: "weblab4-faketinder",
    storageBucket: "weblab4-faketinder.appspot.com",
    messagingSenderId: "206404247220",
    appId: "1:206404247220:web:e8a68e5b467498d8b441e1",
    measurementId: "G-VJ3NYR0YCV"
  };
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;