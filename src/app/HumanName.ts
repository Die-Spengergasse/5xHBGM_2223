
export interface HumanName {
  id: string;
  use: string;
  text?: string;
  family: string;
  given: string[];
  prefix: string[];
  suffix: string[];
  period?: any;
}
