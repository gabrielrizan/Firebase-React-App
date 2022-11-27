// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {getFirestore }  from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA2nJIzZRMJDjVNUmQXiSp7PNZnW5CzpSg",

  authDomain: "house-marketplace-app-67523.firebaseapp.com",

  projectId: "house-marketplace-app-67523",

  storageBucket: "house-marketplace-app-67523.appspot.com",

  messagingSenderId: "727599905012",

  appId: "1:727599905012:web:3f50c672a918afe43e46a1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);