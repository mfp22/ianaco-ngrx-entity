export interface Nav {
  label: string;
  link: string;
}

export interface Personal {
  firstName: string;
  lastName: string;
  occupation: string;
}

export interface Profile {
  image: string;
  personal: Personal;
  navs: Nav[];
}
