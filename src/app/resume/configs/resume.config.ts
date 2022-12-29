// models
import { Resume } from '../models';
// consts
const imageBasePath = 'assets/images';

export const resume: Resume = {
  fullName: 'Joshua Ianacone',
  roleType: 'Front End ',
  role: 'Software Engineer',
  summary: `
    Motivated Front End Engineer with experience building and maintaining 
    responsive websites. Extensive collaboration with teams to produce 
    sites that deliver business results. Strong interest in UI/UX.
  `,
  contact: {
    title: 'Contact',
    items: [
      {
        label: 'Address',
        value: 'Myrtle Beach, SC 29588',
      },
      {
        label: 'E-mail',
        value: 'joshua.ianacone@gmail.com',
      },
      {
        label: 'GitHub',
        value: `<a class="app-link" href="https://github.com/ianaco" target="_blank" rel="noopener noreferrer">github.com/ianaco</a>`,
      },
      {
        label: 'Personal Website',
        value: `<a class="app-link" href="https://ianaco" target="_blank" rel="noopener noreferrer">ianaco</a>`,
      },
    ],
  },
  skills: {
    title: 'Skills',
    items: [
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
        label: 'Basic SEO',
      },
      {
        label: 'Adobe XD',
      },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Front End Software Engineer (Freelance)',
        beginDate: '2022-02',
        endDate: 'Present',
        companies: [
          {
            name: 'Game Seven Sports, PA',
            qualifications: [
              `Assisted in compiling branding guidelines.`,
              `Designed low and high fidelity prototypes for company landing page and core application.`,
              `Implemented company landing page.`,
            ],
          },
          {
            name: 'Tutor Me LLC, NJ',
            qualifications: [
              `Consulted on improvements to current site design.`,
              `Developed future A/B test use cases.`,
              `Custom code and styling updates to website.`,
            ],
          },
        ],
      },
      {
        role: 'Front End Software Engineer',
        companies: [
          {
            name: 'Marlette Funding LLC, Wilmington, DE',
            beginDate: '2016-01',
            endDate: '2022-01',
            qualifications: [
              `Implemented and maintained customer facing and internal websites.`,
              `Worked closely with design and branding teams for assessing UI/UX designs for improvements and technical feasibility.`,
              `Collaborated with product team members to gather and determine project requirements.`,
              `Worked with back end engineers for establishing API contracts and integrations.`,
            ],
            achievements: [
              `Contributions to customer loan servicing website and credit card apply website.`,
              `Design and implementation of customer fico score page.`,
            ],
          },
        ],
      },
      {
        role: 'Technical Consultant',
        companies: [
          {
            name: 'Entech Consulting LLC Contracted To Barclaycard US, Wilmington, DE',
            beginDate: '2014-06',
            endDate: '2015-12',
            qualifications: [
              `Application support, analyzed issues related to Java and .Net applications for Barclaycard US.`,
              `Examined application logs and company databases to determine issues/defects in production environment.`,
              `Coordinated with other groups and teams for fixes and remediation to be implemented.`,
            ],
          },
        ],
      },
      {
        role: 'Computer Engineer',
        companies: [
          {
            name: 'Scientific Search Contracted To Naval Surface Warfare Center, Philadelphia, PA',
            beginDate: '2013-02',
            endDate: '2013-06',
            qualifications: [
              `Defense Contractor at Naval Surface Warfare Center Carderock Division.`,
              `Worked with data acquisition systems for monitoring naval ships.`,
              `Developed software to obtain and analyze on board ship sensor data.`,
            ],
          },
        ],
      },
      {
        role: 'Engineer / Software Developer (Internship)',
        companies: [
          {
            name: 'South Jersey Technology Park, Glassboro, NJ',
            beginDate: '2011-05',
            endDate: '2012-01',
            qualifications: [
              `Funded by New Jersey Board of Public Utilities, developed an energy assurance plan and energy reporting system for the state.`,
              `Researched and compiled detailed information on state's electrical, petroleum, and natural gas infrastructure.`,
              `Developed software to monitor, analyze, and store electrical outage information from major power utilities.`,
            ],
          },
        ],
      },
    ],
  },
  projects: {
    title: 'Additional Experience',
    items: [
      {
        date: '2020',
        name: 'Development for Delivery Company',
        description: `
        Partnered with delivery company to develop responsive web application for managing and assigning drivers along with displaying vehicle stops for company delivery campaigns. 
        `,
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        date: '2012',
        degree: 'Bachelor of Science: Electrical And Computer Engineering',
        minor: 'Minor in Mathematics',
        institution: 'Rowan University - Glassboro, NJ',
      },
    ],
  },
  certifications: {
    title: 'Certifications',
    items: [
      {
        date: '2022',
        name: 'Google SEO Fundamentals (Coursea By UC Davis)',
      },
      {
        date: '2020',
        name: 'HTML5 (Coursea By University Michigan)',
      },
      {
        date: '2020',
        name: 'Ultimate Courses (Angular, RxJS, NGRX, Typescript)',
      },
      {
        date: '2014',
        name: 'Oracle Certified Associate, Java SE 7 Programmer',
      },
    ],
  },
  certificationCerts: [
    {
      label: 'Ultimate Angular Angular Fundamentals',
      value: `${imageBasePath}/certifications/angular-fundamentals-cert.jpg`,
    },
    {
      label: 'Ultimate Angular Angular Pro',
      value: `${imageBasePath}/certifications/angular-pro-cert.jpg`,
    },
    {
      label: 'Ultimate Angular Ngrx',
      value: `${imageBasePath}/certifications/ngrx-cert.jpg`,
    },
    {
      label: 'Ultimate Angular Rxjs Basics',
      value: `${imageBasePath}/certifications/rxjs-basics-cert.jpg`,
    },
    {
      label: 'Ultimate Angular Rxjs Masterclass',
      value: `${imageBasePath}/certifications/rxjs-masterclass-cert.jpg`,
    },
    {
      label: 'Ultimate Angular Typescript Basics',
      value: `${imageBasePath}/certifications/typescript-basics-cert.jpg`,
    },
    {
      label: 'Ultimate Angular Typescript Masterclass',
      value: `${imageBasePath}/certifications/typescript-masterclass-cert.jpg`,
    },
    {
      label: 'HTML5 - Coursea By University Of Michigan',
      value: `${imageBasePath}/certifications/google-seo-fundamentals-cert.jpg`,
    },
    {
      label: 'Introduction To Google SEO - Coursea By UC Davis',
      value: `${imageBasePath}/certifications/introduction-to-google-seo-cert.jpg`,
    },
    {
      label: 'Google SEO Fundamentals - Coursea By UC Davis',
      value: `${imageBasePath}/certifications/google-seo-fundamentals-cert.jpg`,
    },
    {
      label: 'Oracle Associate Programmer',
      value: `${imageBasePath}/certifications/oracle-cert.jpg`,
    },
  ],
};
