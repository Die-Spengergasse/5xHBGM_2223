import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EmptyProject';
  ipAddress: string = "";

  // todo store patients here
  public patients: Patient[] = [];
  currentPatient?: Patient = undefined;

  constructor(private dataService: DataService) {}

  selectPatient(selection: Patient) {
    this.currentPatient = selection;
  }

  createNewPatient() {
    this.currentPatient = {};
  }

  createPatient(patient: Patient) {
    this.dataService.postPatient(patient).subscribe(response => {
      console.log('post', response);
      this.fetchPatients();
      this.currentPatient = undefined;
    });
  }

  updatePatient(patient: Patient) {
    this.dataService.putPatient(patient).subscribe(response => {
      console.log('put', response);
      this.fetchPatients();
      this.currentPatient = undefined;
    });
  }

  deletePatient(patient: Patient) {
    this.dataService.deletePatient(patient).subscribe(response => {
      console.log('Patient deleted', response);
      this.fetchPatients();
      this.currentPatient = undefined;
    });
  }

  fetchIpText() {
    this.dataService.getIfConfigMe().subscribe(response => {
      console.log(response);
      this.ipAddress = response;
    });
  }

  fetchIpJson(){
    this.dataService.getAllJson().subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.fetchIpText();
    this.fetchIpJson();
    this.fetchPatients();
  }

  fetchPatients() {
    this.dataService.getPatients().subscribe(patients => {
      console.log(patients);
      this.patients = patients;
    });
  }

  // todo add http requests
  // https://angular.io/guide/http

  getAllPatients(): void{
    throw new Error("not implemented");
  }
}

