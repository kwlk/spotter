import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotter';
  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { }
}
