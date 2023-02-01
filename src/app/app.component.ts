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

  patientForm = new FormGroup({
    id: new FormControl(''),
    identifier: new FormArray([]) ,
    name: new FormGroup({}), // todo create name formgroup
    text: new FormControl(''),
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

    console.log(selection);
    
    // todo adjust amount of dynamic form elements
    this.adjustDynamicFormElements(selection);
    this.patientForm.patchValue(selection);

  }




  ngOnInit(): void {
<<<<<<< HEAD
    this.fetchIpText();
    this.fetchIpJson();
=======
    this.fetchPatients();
  }

  fetchPatients() {
    this.dataService.getPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  // todo add http requests
  // https://angular.io/guide/http

  getAllPatients(): void{
    throw new Error("not implemented");
>>>>>>> f2a3cd3 (enabled dynamic field amount changes based on incoming data)
  }



  adjustDynamicFormElements(selection: Patient) {
    console.log(selection.telecom.length);

    
    const dynamicFields: [string, Function][] = [
      ["telecom", () => this.createTelecomFormGroup()],
      ["address", () => this.createAddressFormGroup()]
    ];

    /*
    dynamicFields.forEach(fieldDefinition => {
      this.patientForm.controls[fieldDefinition[0]] = new FormArray(
        Array(selection[fieldDefinition[0]].length).fill(null).map(fieldDefinition[1] as any);
      ); 
    });*/
    

    // telecom
    this.patientForm.controls.telecom = new FormArray(
      // Array(selection.telecom.length).fill(this.createTelecomFormGroup())
      Array(selection.telecom.length).fill(null).map(() => this.createTelecomFormGroup())
    );

    // address
    this.patientForm.controls.address = new FormArray(
      Array(selection.address.length).fill(null).map(() => this.createAddressFormGroup())
    );
}
}


