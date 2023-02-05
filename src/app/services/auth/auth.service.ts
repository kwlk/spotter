import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  afAuth: AngularFireAuth, private router: Router) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if(result.user) {
          this.router.navigate(['/map']);
        } else {
          this.afAuth.signOut();
          this.router.navigate(['/'])
        }
      }).catch((error) => {
        console.log(error);
      })
  }

  async signOut(): Promise<void> {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
