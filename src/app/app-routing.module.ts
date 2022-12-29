import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CalendarEventsComponent} from "./components/calendar-events/calendar-events.component";
import {AuthGuard} from "./guards/auth.guard";
import {MapComponent} from "./components/map/map.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'events', component: CalendarEventsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }