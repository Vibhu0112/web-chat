// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWO9urSDFkJGUfdzhgwM_dhusALSuDFNY",
  authDomain: "web-chat-d3cd0.firebaseapp.com",
  projectId: "web-chat-d3cd0",
  storageBucket: "web-chat-d3cd0.appspot.com",
  messagingSenderId: "327788252506",
  appId: "1:327788252506:web:442e9662852156fb67b763"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);

export {app,db,storage};