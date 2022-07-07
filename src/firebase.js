// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = ({
    apiKey: "AIzaSyBnFsMsfSPblrlf_KwErgUU6l8JK2ZJVu0",
    authDomain: "clone-268f4.firebaseapp.com",
    projectId: "clone-268f4",
    storageBucket: "clone-268f4.appspot.com",
    messagingSenderId: "319435096914",
    appId: "1:319435096914:web:ae949e910c9334ca0a708b",
    measurementId: "G-QV38XP3EZ2"
  });

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = firebase.auth();
export default initializeApp;