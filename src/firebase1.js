import * as firebase from "firebase";

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

  const firebaseAuth = firebase.auth();

  export const firebaseAuth = firebase.auth();

  export default firebase