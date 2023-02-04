import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "../../services/auth/auth.service";
import {CalendarEvent} from "../../models/event/calendar-event.model";
import {EventService} from "../../services/event/event.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.css']
})
export class CalendarEventsComponent implements OnInit {
  calendarEvents?: CalendarEvent[];
  currentCalendarEvent?: CalendarEvent
  currentIndex = -1;
  title = '';

  constructor(public authService: AuthService, public afAuth: AngularFireAuth, private eventService: EventService) { };

  ngOnInit(): void {
    this.retrieveEvents();
  };

  refreshList(): void {
    this.currentCalendarEvent = undefined;
    this.currentIndex = -1;
    this.retrieveEvents();
  }

  retrieveEvents(): void {
    this.eventService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.calendarEvents = data;
    });
  }

  setActiveEvent(calendarEvent: CalendarEvent, index: number): void {
    this.currentCalendarEvent = calendarEvent;
    this.currentIndex = index;
  }

  removeAllEvents(): void {
    this.eventService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
