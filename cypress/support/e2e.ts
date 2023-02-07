// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const fbConfig = {
  apiKey: "AIzaSyCbq--h1c89Qy2rRhUrlsLD4En3oIQZheY",
  authDomain: "spotter-9ce84.firebaseapp.com",
  databaseURL:"https://spotter-9ce84-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "spotter-9ce84",
  storageBucket: "spotter-9ce84.appspot.com",
  messagingSenderId: "673212805181",
  appId: "1:673212805181:web:d78a8f85841491ff003a54",
  measurementId: "G-Q50XR2505C"
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
