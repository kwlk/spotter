/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import {attachCustomCommands} from "cypress-firebase";
import firebase from "firebase/compat/app";

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

attachCustomCommands({Cypress, cy, firebase});
