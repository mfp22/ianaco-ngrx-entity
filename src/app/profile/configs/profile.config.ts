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
    Experience building and maintaining 
    responsive websites.
  `,
    skills: [
      {
        label: 'HTML',
      },
      {
        label: 'CSS',
      },
      {
        label: 'SCSS',
      },
      {
        label: 'JavaScript',
      },
      {
        label: 'TypeScript',
      },
      {
        label: 'Angular',
      },
      {
        label: 'Angular Material',
      },
      {
        label: 'RxJS',
      },
      {
        label: 'NgRx',
      },
      {
        label: 'Jasmine',
      },
      {
        label: 'Adobe XD',
      },
    ],
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
