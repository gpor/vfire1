import firebase from 'firebase'
import 'firebase/firestore'

import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlcH8LjPVfD2g2SUF5-jZaWKYY-BVc5MQ",
  authDomain: "vfire1-736cb.firebaseapp.com",
  projectId: "vfire1-736cb",
  storageBucket: "vfire1-736cb.appspot.com",
  messagingSenderId: "132385027133",
  appId: "1:132385027133:web:be4d861d784f5eadb9a654",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = app.firestore()

export { app, db }