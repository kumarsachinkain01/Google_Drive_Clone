// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDE1xJrVykK7p05V3X9MMfSuFAq4j5V46w",
    authDomain: "drive-clone-d6017.firebaseapp.com",
    projectId: "drive-clone-d6017",
    storageBucket: "drive-clone-d6017.appspot.com",
    messagingSenderId: "661664382122",
    appId: "1:661664382122:web:b9c2743ecd8f16069ba4d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };
