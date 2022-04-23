export interface Nav {
  label: string;
  link: string;
  active?: boolean;
}

export interface Personal {
  firstName: string;
  lastName: string;
  occupation: string;
  occupationType: string;
  email: string;
}

export interface Profile {
  image: string;
  personal: Personal;
  navs: Nav[];
}
