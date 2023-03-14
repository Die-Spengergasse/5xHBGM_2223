// the fhir ressource identifier as typescript interface
// see documentation at https://www.hl7.org/fhir/datatypes.html#Identifier
export interface Identifier {
  use: string;
  type: CodeableConcept;
  system: string;
  value: string;
  period: Period;
  assigner: string;
}

// the fhir ressource Period as typescript interface
// see documentation at https://www.hl7.org/fhir/datatypes.html#Period
export interface Period extends Element {
  start: Date;
  end: Date;

}

// the fhir ressource Element as typescript interface
// see documentation at https://www.hl7.org/fhir/datatypes.html#Element
export interface Element {
  id: string;
}

// the fhir ressource CodeableConcept as typescript interface
// see documentation at https://www.hl7.org/fhir/datatypes.html#CodeableConcept
export interface CodeableConcept extends Element {
  coding: Coding[];
  text: string;
}

// the fhir ressource Coding as typescript interface
// see documentation at https://www.hl7.org/fhir/datatypes.html#Coding
export interface Coding extends Element {
  system: string;
  version: string;
  code: string;
  display: string;
  userSelected: boolean;
}

// identifierType is an enum for the different types of identifiers
// see documentation at https://www.hl7.org/fhir/valueset-identifier-type.html
export enum IdentifierType {
  DL = 'http://terminology.hl7.org/3.1.0/CodeSystem-v2-0203.html#v2-0203-DL',
  PPN = 'http://terminology.hl7.org/3.1.0/CodeSystem-v2-0203.html#v2-0203-PPN',
  BRN = 'http://terminology.hl7.org/3.1.0/CodeSystem-v2-0203.html#v2-0203-BRN',
  MR = 'http://terminology.hl7.org/3.1.0/CodeSystem-v2-0203.html#v2-0203-MR',
  MCN = 'http://terminology.hl7.org/3.1.0/CodeSystem-v2-0203.html#v2-0203-MCN',
  EN = 'http://terminology.hl7.org/3.1.0/CodeSystem-v2-0203.html#v2-0203-EN',
}
