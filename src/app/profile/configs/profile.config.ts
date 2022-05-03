// models
import { Profile } from '../models';

export const profile: Profile = {
  image: 'assets/images/profile-image-min.png',
  personal: {
    firstName: 'Josh',
    lastName: 'Ianacone',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    occupation: 'Engineer',
    occupationType: 'Front End',
    emailUsername: 'joshua.ianacone',
    emailDomain: '@gmail.com',
    get email() {
      return `${this.emailUsername}${this.emailDomain}`;
    },
    description: `
    Motivated Front End Engineer with experience building and maintaining 
    responsive websites. Extensive collaboration with teams to produce 
    sites that deliver business results. Strong interest in UI/UX.
  `,
  },
  navs: [
    {
      label: 'Home',
      value: 'home',
    },
    {
      label: 'About',
      value: 'about',
    },
    {
      label: 'projects',
      value: 'projects',
    },
    {
      label: 'resume',
      value: 'resume',
    },
  ],
};
