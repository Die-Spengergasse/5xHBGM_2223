import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import { DataService } from './data.service';
<<<<<<< HEAD
=======
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HumanName } from './HumanName';
<<<<<<< HEAD
>>>>>>> acf087d (added dynamic field creation for list of strings in name field)
=======
>>>>>>> d4c6121 (added dynamic field creation for list of strings in name field)

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
<<<<<<< HEAD
<<<<<<< HEAD
    name: new FormArray([this.createHumanNameFormGroup(1,1,1)]), // todo create name formgroup
=======
    name: new FormGroup({}), // todo create name formgroup
>>>>>>> 65af32d (enabled dynamic field amount changes based on incoming data)
=======
    name: new FormArray([this.createHumanNameFormGroup(1,1,1)]), // todo create name formgroup
>>>>>>> d4c6121 (added dynamic field creation for list of strings in name field)
    text: new FormControl(''),
    active: new FormControl(true),
    gender: new FormControl<string>('unknown'),
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

  addNewName(){
    this.patientForm.controls.name.push(this.createHumanNameFormGroup(1, 1, 1));
  }

  removeAddress(index: number) {
    this.patientForm.controls.address.removeAt(index);
  }

  removeName(index: number) {
    this.patientForm.controls.name.removeAt(index);
  }


  private createTelecomFormGroup(): FormGroup<{
    value: FormControl<string | null>;
  }> {
    return new FormGroup({
      value: new FormControl(''),
    });
  }

  createTextFormControl(){
    return new FormControl<string | null>("");
  }

  createPeriodFormGroup(){
    return new FormGroup({
      start: new FormControl<Date>( new Date()),
      end: new FormControl<Date>( new Date())
    });
  }

  addGivenName(name: any){
    console.log( this.patientForm.value);
    name.controls.given.push(this.createTextFormControl());
    
  }

  removeGivenName(index: number, name: any){
    name.controls.given.removeAt(index);
  }

  addSuffix(name: any){
    console.log( this.patientForm.value);
    name.controls.suffix.push(this.createTextFormControl());
    
  }

  removeSuffix(index: number, name: any){
    name.controls.suffix.removeAt(index);
  }

  
  addPrefix(name: any){
    console.log( this.patientForm.value);
    name.controls.prefix.push(this.createTextFormControl());
    
  }

  removePrefix(index: number, name: any){
    name.controls.suffix.removeAt(index);
  }

  createHumanNameFormGroup(givenAmount: number , prefixAmount: number , suffixAmount: number ){
    return new FormGroup({
      id: new FormControl(""),
      use: new FormControl(""),
      text: new FormControl<null | string>(""),
      family: new FormControl<string>(""),
      given: new FormArray(Array(givenAmount).fill(null).map( () => this.createTextFormControl()) ),
      prefix: new FormArray(Array(prefixAmount).fill(null).map( () => this.createTextFormControl()) ),
      suffix: new FormArray(Array(suffixAmount).fill(null).map( () => this.createTextFormControl()) ),
      period: this.createPeriodFormGroup()
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 65af32d (enabled dynamic field amount changes based on incoming data)
=======
>>>>>>> d4c6121 (added dynamic field creation for list of strings in name field)
  }

  ngOnInit(): void {
<<<<<<< HEAD
<<<<<<< HEAD
    this.fetchIpText();
    this.fetchIpJson();
=======
=======
>>>>>>> 65af32d (enabled dynamic field amount changes based on incoming data)
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> 65af32d (enabled dynamic field amount changes based on incoming data)
=======

>>>>>>> d4c6121 (added dynamic field creation for list of strings in name field)

    // telecom
    this.patientForm.controls.telecom = new FormArray(
      // Array(selection.telecom.length).fill(this.createTelecomFormGroup())
      Array(selection.telecom.length).fill(null).map(() => this.createTelecomFormGroup())
    );

    // address
    this.patientForm.controls.address = new FormArray(
      Array(selection.address.length).fill(null).map(() => this.createAddressFormGroup())
    );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d4c6121 (added dynamic field creation for list of strings in name field)

    // name
    this.patientForm.controls.name = new FormArray(
      selection.name.map(name => this.createHumanNameFormGroup(name.given.length, name.prefix.length, name.suffix.length))
    );

<<<<<<< HEAD
=======
>>>>>>> 65af32d (enabled dynamic field amount changes based on incoming data)
=======
>>>>>>> d4c6121 (added dynamic field creation for list of strings in name field)
}
}


