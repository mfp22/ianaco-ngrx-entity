// models
import { Projects } from '../models';

export const projects: Projects = [
  {
    title: 'Sample Demo App',
    name: 'sample-demo-app',
    content: `
      Sample application to demo different concepts and functionality for Angular and NgRx.
      `,
    links: [
      {
        label: 'design',
        value:
          'https://xd.adobe.com/view/5061fc71-bf7c-432c-997e-c0c111648317-0532/grid',
      },
      {
        label: 'code',
        value: 'https://github.com/ianacodev/sample-demo-app',
      },
      { label: 'demo', value: 'https://ianacodev/sample-demo-app' },
    ],
  },
  {
    title: 'About Me',
    name: 'personal-website',
    content: 'My personal website I designed and built using angular/ngrx.',
    links: [
      {
        label: 'code',
        value: 'https://github.com/ianacodev/ianacodev',
      },
    ],
  },
  {
    title: 'Data Table Library',
    name: 'ngx-data-table-lib',
    content: 'Custom library for configurable table to display data.',
    links: [
      {
        label: 'code',
        value: 'https://github.com/ianacodev/ngx-data-table-lib',
      },
    ],
  },
  {
    title: 'Sample Redux Store',
    name: 'sample-redux-store',
    content: 'Sample redux store for understanding concepts.',
    links: [
      {
        label: 'code',
        value: 'https://github.com/ianacodev/sample-redux-store',
      },
    ],
  },
  {
    title: 'Typescript Basics',
    name: 'typescript_basics',
    content: 'Sample scripts based on concepts from an online tutorial.',
    links: [
      {
        label: 'code',
        value: 'https://github.com/ianacodev/typescript_basics',
      },
    ],
  },
  {
    title: 'Example Scripts',
    name: 'example_scripts',
    content: 'Example scripts for demoing es6+ basics.',
    links: [
      {
        label: 'code',
        value: 'https://github.com/ianacodev/example_scripts',
      },
    ],
  },
  {
    title: 'XHR Examples',
    name: 'XHRExamples',
    content: 'Some xhr examples for demoing.',
    links: [
      {
        label: 'code',
        value: 'https://github.com/ianacodev/XHRExamples',
      },
    ],
  },
];
