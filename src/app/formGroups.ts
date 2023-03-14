import {FormControl, FormGroup} from "@angular/forms";

export function createAddressFormGroup() {
  return new FormGroup({
    city: new FormControl(''),
    postalcode: new FormControl(''),
  });
}

export function createTelecomFormGroup(): FormGroup<{
  value: FormControl<string | null>;
}> {
  return new FormGroup({
    value: new FormControl(''),
  });
}
