import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDO1IBp2qW-NAqLRLpc-pNw3ZOaLpQJatU",
  authDomain: "facebook-2f104.firebaseapp.com",
  databaseURL: "https://facebook-2f104.firebaseio.com",
  projectId: "facebook-2f104",
  storageBucket: "facebook-2f104.appspot.com",
  messagingSenderId: "104577230235",
  appId: "1:104577230235:web:27cb3a19bdcb0a0aeaad3e",
};

const db = firebase.initializeApp(firebaseConfig).firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
