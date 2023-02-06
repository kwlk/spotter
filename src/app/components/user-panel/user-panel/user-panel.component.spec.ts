import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserPanelComponent} from './user-panel.component';
import {EventService} from "../../../services/event/event.service";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../../environments/environment";
import {CalendarEvent} from "../../../models/event/calendar-event.model";

describe('UserPanelComponent', () => {
  let component: UserPanelComponent;
  let fixture: ComponentFixture<UserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      declarations: [UserPanelComponent],
      providers: [EventService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get event correctly', () => {
    let testEvent = new CalendarEvent();
    testEvent.id="dfsgdfgdfl4rlnk";
    expect(component.calendarEvent).toBeUndefined();
    component.getEvent(testEvent);
    expect(component.calendarEvent).toEqual(testEvent);
  });

  it('should save changes in event correctly', () => {
    let testEvent = new CalendarEvent();
    testEvent.id="dfsgdfgdfl4rlnk";
    spyOn(component.eventService, 'update').and.callThrough();
    component.getEvent(testEvent)
    component.save(testEvent)
    expect(component.eventService.update).toHaveBeenCalled();
  });
});
