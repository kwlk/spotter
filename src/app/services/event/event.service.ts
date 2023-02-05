import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import {CalendarEvent} from "../../models/event/calendar-event.model";
import {AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = '/events';

  eventsRef: AngularFireList<CalendarEvent>;
  events: AngularFirestoreCollection<CalendarEvent> = null;

  constructor(private db: AngularFireDatabase) {
    this.eventsRef = db.list(this.eventsUrl);
  }

  getAll(): AngularFireList<CalendarEvent> {
    return this.eventsRef;
  }


  create(calendarEvent: CalendarEvent): any {
    return this.eventsRef.push(calendarEvent);
  }

  update(key: string, value: any): Promise<void> {
    return this.eventsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.eventsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.eventsRef.remove();
  }
}
