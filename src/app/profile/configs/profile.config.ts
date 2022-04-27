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
    occupation: 'Software Engineer',
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
      link: 'home',
    },
    {
      label: 'About',
      link: 'about',
    },
    {
      label: 'projects',
      link: 'projects',
    },
    {
      label: 'resume',
      link: 'resume',
    },
  ],
};
