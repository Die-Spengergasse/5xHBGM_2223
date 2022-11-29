import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Gender, Patient } from './Patient';
import { DataService } from './data.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  patientForm = new FormGroup({
    active: new FormControl(true),
    gender: new FormControl<Gender>('unknown'),
    birthDate: new FormControl(''),
    telecom: new FormArray([this.createTelecomFormGroup()]),
    deceasedBoolean: new FormControl(false),
    deceasedDateTime: new FormControl(null as Date | null),
    address: new FormArray([this.createAddressFormGroup()]),
  });

  createAddressFormGroup() {
    return new FormGroup({
      city: new FormControl(''),
      postalcode: new FormControl(''),
    });
  }

  addNewAddress() {
    this.patientForm.controls.address.push(this.createAddressFormGroup());
  }

  removeAddress(index: number) {
    this.patientForm.controls.address.removeAt(index);
  }

  private createTelecomFormGroup(): FormGroup<{
    value: FormControl<string | null>;
  }> {
    return new FormGroup({
      value: new FormControl(''),
    });
  }

  addNewTelecom() {
    this.patientForm.controls.telecom.push(this.createTelecomFormGroup());
  }

  constructor(private dataService: DataService) {}

  selectPatient(selection: Patient) {
    this.currentPatient = selection;
  }

  createNewPatient() {
    this.currentPatient = {};
    this.patientForm.reset();
  }

  savePatient() {
    this.dataService.postPatient(this.currentPatient!).subscribe(response => {
      console.log('post', response);
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

