import { Injectable } from '@angular/core';
import {CalendarEvent} from "../interfaces/CalendarEvent";
import {EVENTS} from "../mock-events";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = 'api/events'

  constructor(
    private http: HttpClient) { }

  getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this.eventsUrl)
      .pipe(
      catchError(this.handleError<CalendarEvent[]>('getEvents', []))
    );

  }
  updateEvent(event: CalendarEvent): Observable<any> {
    return this.http.put(this.eventsUrl, event, this.httpOptions)
      .pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addEvent(event: CalendarEvent): Observable<CalendarEvent> {
    return this.http.post<CalendarEvent>(this.eventsUrl, event, this.httpOptions).pipe(
      catchError(this.handleError<CalendarEvent>('addEvent'))
    );
  }

  deleteEvent(id: number): Observable<CalendarEvent> {
    const url = `${this.eventsUrl}/${id}`;

    return this.http.delete<CalendarEvent>(url, this.httpOptions).pipe(
      catchError(this.handleError<CalendarEvent>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
     // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
