import { Address } from './Address';
import { HumanName } from './HumanName';
import { Telecom } from './Telecom';

// todo implement all your server-side properties of patient

export type Gender = 'unknown' | 'male' | 'female' | 'other';

export interface Patient {
  id?: string;
  active: boolean | null | undefined;
  gender: Gender | null | undefined;
  birthdate: string | null | undefined;
  telecom?: Telecom[];
  name?: HumanName[];
  deceasedBoolean: boolean | null | undefined;
  deceasedDateTime?: Date;
  address?: Address[];
}
