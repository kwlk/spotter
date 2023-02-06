import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventComponent } from './calendar-event.component';
import {CalendarEvent} from "../../models/event/calendar-event.model";

describe('CalendarEventComponent', () => {
  let component: CalendarEventComponent;
  let fixture: ComponentFixture<CalendarEventComponent>;
  let testCalendarEvent = new CalendarEvent()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should process input correctly', () => {
    testCalendarEvent.title = "Tested title";
    component.calendarEvent = testCalendarEvent;
    component.ngOnChanges();
    fixture.detectChanges();

    expect(component.currentCalendarEvent).toEqual({"title": testCalendarEvent.title});
  });
});
