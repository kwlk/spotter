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
import { HeaderComponent } from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from '@agm/core';
import { MapComponent } from './components/map/map.component';




@NgModule({
  declarations: [
    AppComponent,
    CalendarEventsComponent,
    LoginComponent,
    HeaderComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChg7CrYViIGlXMInPhAgZO1ZJm8j-4Vtc'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
