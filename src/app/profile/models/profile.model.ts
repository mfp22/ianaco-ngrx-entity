// models
import { Item } from '../../shared/models';
export interface Personal {
  firstName: string;
  lastName: string;
  fullName: string;
  occupation: string;
  occupationType: string;
  emailUsername: string;
  emailDomain: string;
  email: string;
  description: string;
}

export interface Profile {
  image: string;
  personal: Personal;
  navs: Item<string>[];
}
