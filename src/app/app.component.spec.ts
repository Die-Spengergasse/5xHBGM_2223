import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Patient } from "./Patient";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should return all patients', function () {
    const patients: Patient[] = [
    ];

    const fixture = TestBed.createComponent(AppComponent);
    const http = TestBed.inject(HttpClient);
    const app = fixture.componentInstance;

    spyOn(http,'get').and.callThrough().and.returnValue(of(patients));

    app.getAllPatients();

    if(app.patients.length === 0){
      throw new Error("no patients were received");
    }
  });

});
