// models
import { Profile } from '../models';

export const profile: Profile = {
  image: 'assets/images/profile-image-min.png',
  personal: {
    firstName: 'Josh',
    lastName: 'Ianacone',
    occupation: 'Software Engineer',
    occupationType: 'Front End',
    email: 'joshua.ianacone@gmail.com',
  },
  navs: [
    {
      label: 'Home',
      link: 'home',
      active: false,
    },
    {
      label: 'About',
      link: 'about',
      active: false,
    },
    {
      label: 'projects',
      link: 'projects',
      active: false,
    },
    {
      label: 'resume',
      link: 'resume',
      active: false,
    },
  ],
};
