// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyRKk_-66ldvGvIY3-GruFEEKPs4Ou_aE",
  authDomain: "asg-9-624cf.firebaseapp.com",
  projectId: "asg-9-624cf",
  storageBucket: "asg-9-624cf.firebasestorage.app",
  messagingSenderId: "897871912487",
  appId: "1:897871912487:web:b346126cf847190667f802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);