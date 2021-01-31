// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-26n_Ewy3n8npjmdw75AGMJcRHeHau48",
  authDomain: "clone-93f55.firebaseapp.com",
  projectId: "clone-93f55",
  storageBucket: "clone-93f55.appspot.com",
  messagingSenderId: "499708600075",
  appId: "1:499708600075:web:59bacd2584ff17ab16cc0e",
  measurementId: "G-44S70WYR9Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
