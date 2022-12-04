import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarEventsComponent} from './components/calendar-events/calendar-events.component';
import {LoginComponent} from './components/login/login.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    CalendarEventsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
