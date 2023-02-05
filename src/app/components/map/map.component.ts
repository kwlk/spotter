import { Component} from '@angular/core';
import {EventService} from '../../services/event/event.service'
import {CalendarEvent} from "../../models/event/calendar-event.model";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  events: CalendarEvent[] = [];
  isDisplay = false;
  event : CalendarEvent;
  city: string;
  readonly defaultLat = 50.04;
  readonly defaultLan = 19.56;
  openedWindow : number = 0;

  constructor(private eventService: EventService) {}

  toggleDisplay(event?: CalendarEvent) {
    //this.isDisplay= !this.isDisplay;

    this.event = event;

  }

  handleData(data) {

    this.event = data;

    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${this.event.latitude}&lon=${this.event.longitude}&format=json&addressdetails=1`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    this.city = data.address.town || data.address.city || data.address.village;
  })
  .catch(error => console.error(error));

    this.toggleDisplay(this.event);
    this.openWindow(this.event.id)
  }

  openWindow(id) {
    this.openedWindow = id;
  }

  isInfoWindowOpen(id) {
    return this.openedWindow == id;
  }

  getEvents(): void {
    this.eventService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.events = data;
    });
  }


  ngOnInit(): void {
    this.getEvents();
  }
}
