import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service'
import {CalendarEvent} from '../../../interfaces/CalendarEvent'
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  readonly defaultLat = 50.04;
  readonly defaultLong = 19.56;
  latitude;
  longitude;
  events: CalendarEvent[] = [];
  event: CalendarEvent;
  //private location: Location;
  //event = { id: 14, title: 'Event3', long: 20.00398720620926, lat: 50.08384141523049, address: "ul. Nowa 1/4, 44-111 Kraków", description:"impreza"  };

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  save(): void {
    if (this.event) {
      this.eventService.updateEvent(this.event)
        .subscribe(event => this.event = event);
    }
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  getEvent(event): void {
    this.event = event;
  }

  addEvent(title: string, address: string, description: string, lat: number, long: number): void {
    title = title.trim();
    address = address.trim();
    description = description.trim();
    if (!title || !address || !description) { return; }
    this.eventService.addEvent({ title, address, description, lat, long } as CalendarEvent)
      .subscribe(event => {
        this.events.push(event);
      });
  }

  cancel(): void {
    this.event = null;
    this.getEvents();
  }

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
  delete(event: CalendarEvent): void {
    this.events = this.events.filter(h => h !== event);
    this.eventService.deleteEvent(event.id).subscribe();
  }
}
