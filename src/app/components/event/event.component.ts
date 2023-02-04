import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { CalendarEvent } from 'src/app/models/event/calendar-event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  @Input() event: CalendarEvent;
  @Output() onData = new EventEmitter<any>();
  title: string;
  description: string;
  date: number;

  constructor() { }

  ngOnInit(): void {
    this.title = this.event.title;
    this.description = this.event.description;
    this.date = this.event.date;
  }

  sendData() {
    this.onData.emit(this.event);
  }

}
