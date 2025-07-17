import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZ1FoZahrfLvB2Cjh5538URvkANbrpvDk",
    authDomain: "react-d9c65.firebaseapp.com",
    projectId: "react-d9c65",
    storageBucket: "react-d9c65.appspot.com",  // ✅ Corrected here
    messagingSenderId: "337601277187",
    appId: "1:337601277187:web:7feb16b5268a7fa9648d36",
    measurementId: "G-C76N5SWSK4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
