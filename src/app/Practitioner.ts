// interface for practitioner from fhir specification
// specification from https://www.hl7.org/fhir/practitioner.html
import {HumanName} from "./HumanName";
import {Telecom} from "./Telecom";
import {Address} from "./Address";
import {Gender} from "./Patient";
import {Identifier} from "../Identifier";

export interface Practitioner {
  resourceType?: string;
  id?: string;
  name?: HumanName[];
  telecom?: Telecom[];
  address?: Address[];
  identifier?: Identifier[];
  active?: boolean;
  gender?: Gender;
  birthDate?: Date;
  //photo: Attachment[];
  //qualification: PractitionerQualification[];
  //communication: CodeableConcept[];
}

