import {Component, OnInit} from '@angular/core';
import {CalendarEvent} from "../../interfaces/CalendarEvent";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.css']
})
export class CalendarEventsComponent implements OnInit {
  event: CalendarEvent = {
    id: 1,
    title: "World Domination!"
  };

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
