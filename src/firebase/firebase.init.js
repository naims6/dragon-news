// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCOWNNpDfVDblqHWbbnb0vmj0nQceXchY",
  authDomain: "dragon-news-ece3d.firebaseapp.com",
  projectId: "dragon-news-ece3d",
  storageBucket: "dragon-news-ece3d.firebasestorage.app",
  messagingSenderId: "115482349725",
  appId: "1:115482349725:web:41908eb1aaea9dc9d3c474",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
