import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import {EventService} from "../../services/event/event.service";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      declarations: [ MapComponent ],
      providers: [EventService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get events from service correctly', () => {
    spyOn(component.eventService, 'getAll').and.callThrough();
    component.ngOnInit()
    expect(component.eventService.getAll).toHaveBeenCalled();
  });
});
