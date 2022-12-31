import { Component, OnInit } from '@angular/core';
import {EVENTS} from "../../mock-events";
import {EventService} from '../../services/event.service'
import {CalendarEvent} from "../../interfaces/CalendarEvent";


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

  constructor(private eventService: EventService) {}

  toggleDisplay(event?: CalendarEvent) {
    //this.isDisplay= !this.isDisplay;

    this.event = event;

  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }


  ngOnInit(): void {
    this.getEvents();
  }
}
