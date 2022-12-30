import { Injectable } from '@angular/core';
import {CalendarEvent} from "../interfaces/CalendarEvent";
import {EVENTS} from "../mock-events";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents(): CalendarEvent[] {
    return EVENTS;
  }

  constructor() { }
}
