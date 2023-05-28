// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrPfONElCmvkGDBcrmWj2ADdRfjrvDUhY",
  authDomain: "central-de-bebidas.firebaseapp.com",
  projectId: "central-de-bebidas",
  storageBucket: "central-de-bebidas.appspot.com",
  messagingSenderId: "910648809751",
  appId: "1:910648809751:web:377f5f4a47ca420809ff52",
  measurementId: "G-2WZ1LH2P49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app
