import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {environment} from "../environments/environment";
import {AuthService} from "./services/auth/auth.service";
import {HeaderComponent} from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from './components/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/inMemoryData/in-memory-data.service';
import {UserPanelComponent} from './components/user-panel/user-panel/user-panel.component';
import {FormsModule} from "@angular/forms";
import { EventComponent } from './components/event/event.component';
import { CalendarEventComponent } from './components/calendar-event/calendar-event.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MapComponent,
    UserPanelComponent,
    CalendarEventComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChg7CrYViIGlXMInPhAgZO1ZJm8j-4Vtc'
    }),
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
