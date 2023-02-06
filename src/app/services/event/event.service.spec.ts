import {TestBed} from '@angular/core/testing';

import {EventService} from './event.service';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";

describe('EventService', () => {
  let service: EventService;
  let angularFireDatabase: AngularFireDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      providers: [
        AngularFireDatabase,
        EventService]
    });
    service = TestBed.inject(EventService);
    angularFireDatabase = TestBed.inject(AngularFireDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
