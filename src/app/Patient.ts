import { Address } from './Address';
import { HumanName } from './HumanName';
import { Telecom } from './Telecom';

// todo implement all your server-side properties of patient

export type Gender = 'unknown' | 'male' | 'female' | 'other';

export interface Patient {
  id: string;
  text?: string;
  active?: boolean;
  gender?: Gender;
  birthdate?: string;
  telecom: Telecom[];
  name: HumanName[];
  deceasedBoolean?: boolean;
  deceasedDateTime?: Date;
  address: Address[];
}
