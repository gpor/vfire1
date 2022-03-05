// web app 'vf1' https://console.firebase.google.com/project/vfire1-736cb/overview
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'; // collection, getDocs, getDoc, connectFirestoreEmulator

const firebaseConfig = {
  apiKey: "AIzaSyBlcH8LjPVfD2g2SUF5-jZaWKYY-BVc5MQ",
  authDomain: "vfire1-736cb.firebaseapp.com",
  projectId: "vfire1-736cb",
  storageBucket: "vfire1-736cb.appspot.com",
  messagingSenderId: "132385027133",
  appId: "1:132385027133:web:be4d861d784f5eadb9a654",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { firebaseApp, db }