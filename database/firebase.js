//ESTE MODULO CONECTA LA BASE DE DATOS EN LA NUBE
//para utilizarla en front: import firebase from "../database/firebase"

import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0UiBdd2jsAMehbxyaWFEys9O-RA_MKXM",
  authDomain: "stackhenryflow.firebaseapp.com",
  projectId: "stackhenryflow",
  storageBucket: "stackhenryflow.appspot.com",
  messagingSenderId: "648957429624",
  appId: "1:648957429624:web:7d14aaec62a84c0c50ea8d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
console.log("Base de datos iniciada")
export default {
  firebase,
  db
};
 