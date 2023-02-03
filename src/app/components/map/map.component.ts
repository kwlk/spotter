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
  readonly defaultLat = 50.04;
  readonly defaultLan = 19.56;
  openedWindow : number = 0;

  constructor(private eventService: EventService) {}

  toggleDisplay(event?: CalendarEvent) {
    //this.isDisplay= !this.isDisplay;

    this.event = event;

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
