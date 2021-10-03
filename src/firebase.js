// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
