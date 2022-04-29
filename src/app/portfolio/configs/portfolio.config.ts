// models
import { Portfolio } from '../models';

export const portfolio: Portfolio = {
  cards: [
    {
      title: 'Sample Demo App',
      image: 'assets/images/sample-demo-app-promo-min.png',
      name: 'sample-demo-app',
      type: 'Angular/Ngrx',
      links: [
        {
          label: 'design',
          url: 'https://xd.adobe.com/view/13fab039-c1c2-4297-bd21-5488a9ebd219-46a9/grid/',
        },
        { label: 'code', url: 'https://github.com/ianacodev/sample-demo-app' },
        { label: 'demo', url: 'https://ianacodev.github.io/sample-demo-app' },
      ],
      description: `
      Sample application to demo different concepts and functionality for Angular and NgRx.
      `,
      featured: true,
    },
    {
      title: 'About Me',
      name: 'about-me',
      type: 'Angular/Ngrx',
      description: 'My personal website built using angular/ngrx.',
      links: [
        {
          label: 'code',
          url: 'https://github.com/ianacodev/ianacodev.github.io',
        },
      ],
    },
    {
      title: 'Data Table Library',
      name: 'ngx-data-table-lib',
      type: '',
      description: 'Custom library for configurable table to display data.',
      links: [
        {
          label: 'code',
          url: 'https://github.com/ianacodev/ngx-data-table-lib',
        },
      ],
    },
    {
      title: 'Sample Redux Store',
      name: 'sample-redux-store',
      type: '',
      description: 'Sample redux store for understanding concepts.',
      links: [
        {
          label: 'code',
          url: 'https://github.com/ianacodev/sample-redux-store',
        },
      ],
    },
    {
      title: 'Typescript Basics',
      name: 'typescript_basics',
      type: '',
      description: 'Sample scripts based on concepts from an online tutorial.',
      links: [
        {
          label: 'code',
          url: 'https://github.com/ianacodev/typescript_basics',
        },
      ],
    },
    {
      title: 'Example Scripts',
      name: 'example_scripts',
      type: '',
      description: 'Example scripts for demoing es6+ basics.',
      links: [
        { label: 'code', url: 'https://github.com/ianacodev/example_scripts' },
      ],
    },
    {
      title: 'XHR Examples',
      name: 'XHRExamples',
      type: '',
      description: 'Some xhr examples for demoing.',
      links: [
        {
          label: 'code',
          url: 'https://github.com/ianacodev/XHRExamples',
        },
      ],
    },
  ],
};
