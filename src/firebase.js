import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getFirestore,
  // collection,
  // query,
  // where,
  // getDocs,
} from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5wsArCJz-u2ZfcYo7PDYS8OfgZj00SjM",
  authDomain: "whatsapp-clone-9489d.firebaseapp.com",
  projectId: "whatsapp-clone-9489d",
  storageBucket: "whatsapp-clone-9489d.appspot.com",
  messagingSenderId: "796635269911",
  appId: "1:796635269911:web:fd4fc9562ab307b8050552",
  measurementId: "G-Y36VNCT511",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// import { getAnalytics } from "firebase/analytics";
const provider = new GoogleAuthProvider();
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  // Check for user status
});
export { auth, provider, signInWithPopup };
export default db;
