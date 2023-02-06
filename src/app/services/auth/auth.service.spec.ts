import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";
import {RouterTestingModule} from "@angular/router/testing";
import { of } from 'rxjs';


describe('AuthService', () => {
  let service: AuthService;
  let afAuth: any;

  const mockUser = {
    displayName: 'displayName',
    email: 'some@email.com',
    uid: '123456'
  };

  const mockAngularFireAuth: any = {
    auth: {
      signInWithPopup() {
        return Promise.resolve();
      },
      signOut() {
        return Promise.resolve();
      }
    },

    //   jasmine.createSpyObj('auth' , {
    //   'signInWithPopup': Promise.resolve(),
    //   'signOut': Promise.resolve()
    // }),
    authState: of(mockUser),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule
      ],
      providers: [AuthService,
        {provide: AngularFireAuth, useValue: mockAngularFireAuth}]
    });
    afAuth = TestBed.inject(AngularFireAuth);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
