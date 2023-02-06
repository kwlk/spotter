import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {AuthService} from "../../services/auth/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      declarations: [HeaderComponent],
      providers: [HeaderComponent, AuthService, AngularFireAuth]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.title).toEqual("Spotter");
  });
});
