import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/event/event.service'
import {CalendarEvent} from "../../../models/event/calendar-event.model";
import {getAuth} from "@angular/fire/auth";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  readonly defaultLat = 50.04;
  readonly defaultLong = 19.56;
  latitude = null;
  longitude = null;
  events: CalendarEvent[] = [];
  city: string;
  calendarEvent: CalendarEvent;
  isSelectedEvent: boolean;
  currentUser = getAuth().currentUser.uid;

  constructor(public eventService: EventService) {
  }

  ngOnInit(): void {
    this.getEvents();
    this.newCalendarEvent();
    this.isSelectedEvent = false;
  }

  save(event: CalendarEvent): void {
    if (this.calendarEvent) {
      //add data update
      this.eventService.update(this.calendarEvent.id, event).then(() =>
      console.log("Updated correctly"));
    }
    this.newCalendarEvent();
    this.longitude = null;
    this.latitude = null;
  }

  getEvents(): void {
    this.eventService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.events = data;
    });
  }


  getEvent(event): void {
    this.calendarEvent = event;
    this.isSelectedEvent = true;
    // event.latitude = this.latitude;
    // event.longitude = this.longitude;
  }

  addEvent(title: string, address: string, description: string, lat: number , long: number, date: string): void {
    this.newCalendarEvent();
    title = title.trim();
    address = address.trim();
    description = description.trim();
    if (!title || !address || !description || !date) {
      return;
    }
    this.calendarEvent.title = title;
    this.calendarEvent.description = description;
    this.calendarEvent.address = address;
    this.calendarEvent.latitude = lat;
    this.calendarEvent.longitude = long;
    this.calendarEvent.userId = getAuth().currentUser.uid;
    this.calendarEvent.date = date;
    console.log(this.calendarEvent);

    this.eventService.create(this.calendarEvent).then(() => {
      console.log('Created new item successfully!');
    })
    this.newCalendarEvent();
    this.longitude = null;
    this.latitude = null;
  }

  newCalendarEvent() {
    this.calendarEvent = new CalendarEvent();
    this.isSelectedEvent = false;
  }

  cancel(): void {
    this.longitude = null;
    this.latitude = null;
    this.newCalendarEvent();
    this.getEvents();
  }

  onChoseLocation(event) {
    console.log("new coordinates")
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
   // this.saveNewLocation();
  }

  saveNewLocation() {
    this.calendarEvent.latitude = this.latitude;
    this.calendarEvent.longitude = this.longitude;
  }

  getCurrentLocation() {
    this.latitude = this.calendarEvent.latitude;
    this.longitude = this.calendarEvent.longitude;
  }

  delete(event: CalendarEvent): void {
    this.events = this.events.filter(h => h !== event);
    this.eventService.delete(event.id);
    this.newCalendarEvent();
  }
}
