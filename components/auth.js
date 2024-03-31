// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxXRDly_JqRnhffKKODKgWURuRsdUps9M",
  authDomain: "typing-app-ccc87.firebaseapp.com",
  projectId: "typing-app-ccc87",
  storageBucket: "typing-app-ccc87.appspot.com",
  messagingSenderId: "283403955289",
  appId: "1:283403955289:web:b498c73dcb09183dbd1548",
  measurementId: "G-GE9NCVHP0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
 export {auth,provider}