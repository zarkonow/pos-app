// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD76ngvhVVfy2Z2fzrzqFVOMnY0b6IoT9c",
  authDomain: "pos-app-e370f.firebaseapp.com",
  projectId: "pos-app-e370f",
  storageBucket: "pos-app-e370f.firebasestorage.app",
  messagingSenderId: "993156085951",
  appId: "1:993156085951:web:cefd42df30ccd60d1eee0a",
  measurementId: "G-STMNV5CFR3"
};

// Inicijalizacija Firebase
const app = initializeApp(firebaseConfig);

// Firebase servisi
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
