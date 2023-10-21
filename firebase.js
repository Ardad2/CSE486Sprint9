// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFireStore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUuZUgvlmMYBOl_Kg43Eb2sHnEJp4_us4",
  authDomain: "sandler-cookbook.firebaseapp.com",
  projectId: "sandler-cookbook",
  storageBucket: "sandler-cookbook.appspot.com",
  messagingSenderId: "519878306197",
  appId: "1:519878306197:web:4fe836d84e5caae16dae9c",
  measurementId: "G-PF1Q3WHM3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFireStore();

export {auth,db};
