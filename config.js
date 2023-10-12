import firebase from "firebase";
require("@firebase/firestore");

apiKey: "AIzaSyDfiP-0G1R11r75ty63QbYsiDRCOqmiMxg",
  authDomain: "c78-hwk.firebaseapp.com",
  projectId: "c78-hwk",
  storageBucket: "c78-hwk.appspot.com",
  messagingSenderId: "965325688038",
  appId: "1:965325688038:web:2c16e4b0edcf57965dbf27"





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


