import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getIfConfigMe() {
    return this.http.get("http://ifconfig.me", { responseType: "text" });
  }

  getAllJson() {
    return this.http.get("http://ifconfig.me/all.json", { responseType: "json" });
  }

  getPatients() {
    return this.http.get<Patient[]>("http://localhost:8080/api/patient/", { responseType: "json" });
  }
}
