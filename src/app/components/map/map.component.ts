import { Component, OnInit } from '@angular/core';
import {EVENTS} from "../../mock-events";
import {CalendarEvent} from "../../interfaces/CalendarEvent";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  isDisplay = false;
  events = EVENTS;
  event : CalendarEvent | null = null;
  readonly defaultLat = 50.04;
  readonly defaultLan = 19.56;

  toggleDisplay(event: CalendarEvent) {
    //this.isDisplay;//= !this.isDisplay;
    this.event = event;

  }
}
