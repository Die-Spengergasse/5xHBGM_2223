import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
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

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients() {
    this.dataService.getPatients().subscribe(patients => {
      console.log(patients);
      this.patients = patients;
    });
  }
}