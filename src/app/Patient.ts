import { Address } from './Address';
import { HumanName } from './HumanName';
import { Telecom } from './Telecom';

// todo implement all your server-side properties of patient

export type Gender = 'unknown' | 'male' | 'female' | 'other';

export interface Patient {
  identifier: any; 
  birthDate: any;
  id: string;
  text: string | null;
  active: boolean | null;
  gender: Gender | null;
  birthdate: string;
  telecom: Telecom[] | any;
  name: HumanName[];
  deceasedBoolean: boolean | null;
  deceasedDateTime: Date | null;
  address: Address[] | any;
}
