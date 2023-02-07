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
  filteredEvents: CalendarEvent[] = [];
  isDisplay = false;
  searchValue: string;
  event : CalendarEvent;
  city: string;
  readonly defaultLat = 50.04;
  readonly defaultLan = 19.56;
  openedWindow : number = 0;

  constructor(public eventService: EventService) {}

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

  filterEvents() {
    if (!this.searchValue) {
      this.filteredEvents = [...this.events];
    } else {
        this.filteredEvents = this.events.filter(event => {
          const eventProperties = Object.values(event);
          for (const prop of eventProperties) {
            if (typeof prop === 'string' && prop.toLowerCase().includes(this.searchValue.toLowerCase())) {
              return true;
            }
          }
          return false;
        });
      }
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
      this.filterEvents();
    });
  }


  ngOnInit(): void {
    this.searchValue = "";
    this.getEvents();
  }
}
