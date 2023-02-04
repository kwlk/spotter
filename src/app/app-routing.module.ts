import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CalendarEventsComponent} from "./components/calendar-events/calendar-events.component";
import {AuthGuard} from "./guards/auth.guard";
import {MapComponent} from "./components/map/map.component";
import {UserPanelComponent} from "./components/user-panel/user-panel/user-panel.component"

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'map', component: MapComponent, canActivate: [AuthGuard]},
  {path: 'events', component: CalendarEventsComponent, canActivate: [AuthGuard]},
  {path: 'user-panel', component: UserPanelComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', redirectTo: 'events'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
