// models
import { Portfolio } from '../models';

export const portfolio: Portfolio = {
  cards: [
    {
      title: 'Sample Demo App',
      image: 'assets/images/sample-demo-app-promo-min.png',
      name: 'sample-demo-app',
      links: {
        design:
          'https://xd.adobe.com/view/13fab039-c1c2-4297-bd21-5488a9ebd219-46a9/grid/',
        demo: 'https://ianacodev.github.io/sample-demo-app',
        repo: 'https://github.com/ianacodev/sample-demo-app',
      },
      description: `
      Sample application to demo different concepts and functionality for angular and ngrx.
      `,
      featured: true,
    },
    {
      title: 'About Me',
      name: 'about-me',
      description: 'My personal website built using angular/ngrx.',
      links: {
        repo: 'https://github.com/ianacodev/ianacodev.github.io',
      },
    },
    {
      title: 'Data Table Library',
      name: 'ngx-data-table-lib',
      description: 'Custom library for configurable table to display data.',
      links: {
        repo: 'https://github.com/ianacodev/ngx-data-table-lib',
      },
    },
    {
      title: 'Sample Redux Store',
      name: 'sample-redux-store',
      description: 'Sample redux store for understanding concepts.',
      links: {
        repo: 'https://github.com/ianacodev/sample-redux-store',
      },
    },
    {
      title: 'Typescript Basics',
      name: 'typescript_basics',
      description: 'Sample scripts based on concepts from an online tutorial.',
      links: {
        repo: 'https://github.com/ianacodev/typescript_basics',
      },
    },
    {
      title: 'Example Scripts',
      name: 'example_scripts',
      description: 'Example scripts for demoing es6+ basics.',
      links: {
        repo: 'https://github.com/ianacodev/example_scripts',
      },
    },
    {
      title: 'XHR Examples',
      name: 'XHRExamples',
      description: 'Some xhr examples for demoing.',
      links: {
        repo: 'https://github.com/ianacodev/XHRExamples',
      },
    },
  ],
};
