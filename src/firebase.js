// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_CONFIG_APP_ID,
// };
const firebaseConfig = {
	apiKey: "AIzaSyDtItkeiv-hawlALW8kP3cFuQOwI4rtTfA",
	authDomain: "facebook-dash.firebaseapp.com",
	projectId: "facebook-dash",
	storageBucket: "facebook-dash.appspot.com",
	messagingSenderId: "7050357391",
	appId: "1:7050357391:web:85f12410c910e38f5c5efa",
	measurementId: "G-7XJ4196P4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports to use throughout project
export const firebaseAuth = getAuth(app);
export const firebaseStorage = getStorage(app);
