// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmJ8JozeqdXEBhhMZ8gqErgABBxH-wkL0",
  authDomain: "genius-car-services-74fcc.firebaseapp.com",
  projectId: "genius-car-services-74fcc",
  storageBucket: "genius-car-services-74fcc.appspot.com",
  messagingSenderId: "712234469244",
  appId: "1:712234469244:web:9f9d507177d97ac99c86f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);