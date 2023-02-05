import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Spotter';

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
