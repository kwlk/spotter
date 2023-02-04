import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalendarEvent} from "../../models/event/calendar-event.model";

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @Input() calendarEvent?: CalendarEvent;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentCalendarEvent: CalendarEvent = {
    title: '',
    description: ''
  };
  message = '';

  constructor() {
  }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentCalendarEvent = {...this.calendarEvent};
  }
}
