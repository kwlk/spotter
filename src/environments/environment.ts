// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCbq--h1c89Qy2rRhUrlsLD4En3oIQZheY",
    authDomain: "spotter-9ce84.firebaseapp.com",
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
