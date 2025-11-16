import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your Firebase project configuration
// Get these values from Firebase Console > Project Settings > Your Apps
const firebaseConfig = {
   apiKey: "AIzaSyAgxVVx9NkFl33UKO66XPmO2CIyC3ykykM",
  authDomain: "edcwebapp.firebaseapp.com",
  projectId: "edcwebapp",
  storageBucket: "edcwebapp.firebasestorage.app",
  messagingSenderId: "750066787013",
  appId: "1:750066787013:web:686c76867dd6bf8ae7c6ac",
  measurementId: "G-20M95M0YZJ"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
