import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Gender, Patient } from '../Patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnChanges {
  constructor() {}

  @Input()
  currentPatient?: Patient = undefined;

  @Output()
  patientCreate = new EventEmitter<Patient>();

  @Output()
  patientUpdate = new EventEmitter<Patient>();

  @Output()
  patientDelete = new EventEmitter<Patient>();

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

  private createTelecomFormGroup(): FormGroup<{
    value: FormControl<string | null>;
  }> {
    return new FormGroup({
      value: new FormControl(''),
    });
  }

  addNewAddress() {
    this.patientForm.controls.address.push(this.createAddressFormGroup());
  }

  removeAddress(index: number) {
    this.patientForm.controls.address.removeAt(index);
  }

  addNewTelecom() {
    this.patientForm.controls.telecom.push(this.createTelecomFormGroup());
  }

  savePatient() {
    if (this.currentPatient?.id) {
      // update


      // falls server streikt, kann es sein, dass sie die ids
      // rauslöschen müssen - das geht zB so:
      const id = this.currentPatient.id;
      this.patientUpdate.emit(
        { ...this.currentPatient as any, ...this.patientForm.value }
        // es sollte reichen: merged
      );
    } else {
      // create
      this.patientCreate.emit(this.patientForm.value as any);
    }
  }

  deletePatient() {
    this.patientDelete.emit(this.currentPatient!);
  }

  ngOnChanges(): void {
    this.patientForm.reset();

    if (!this.currentPatient) {
      return;
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.patientForm.controls.address.clear();
    while (
      this.patientForm.controls.address.length <
      (this.currentPatient.address?.length ?? 0)
    ) {
      this.addNewAddress();
    }

    // array muss gleiche länge haben wie datensatz vom server
    this.patientForm.controls.telecom.clear();
    while (
      this.patientForm.controls.telecom.length <
      (this.currentPatient.telecom?.length ?? 0)
    ) {
      this.addNewTelecom();
    }

    this.patientForm.patchValue(this.currentPatient);
  }
}
