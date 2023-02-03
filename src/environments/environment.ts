import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCbq--h1c89Qy2rRhUrlsLD4En3oIQZheY",
    authDomain: "spotter-9ce84.firebaseapp.com",
    databaseURL:"https://spotter-9ce84-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "spotter-9ce84",
    storageBucket: "spotter-9ce84.appspot.com",
    messagingSenderId: "673212805181",
    appId: "1:673212805181:web:d78a8f85841491ff003a54",
    measurementId: "G-Q50XR2505C"
  }
};
const firebaseApp = firebase.initializeApp(environment.firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
