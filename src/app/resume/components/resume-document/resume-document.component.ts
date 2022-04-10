import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-document',
  templateUrl: './resume-document.component.html',
  styleUrls: ['./resume-document.component.scss'],
})
export class ResumeDocumentComponent {
  resume = {
    fullName: 'Joshua Ianacone',
    role: 'Front End Software Engineer',
    summary: `
      Motivated Front EndEngineer with experience building and maintaining 
      responsive websites. Extensive collaboration with teams to produce 
      sites that deliver business results. Strong interest in UI/UX.
    `,
    contact: {
      title: 'Contact',
      items: [
        {
          label: 'Address',
          value: 'Myrtle Beach, SC, 29588',
        },
        {
          label: 'Phone',
          value: '(609) 280-7041',
        },
        {
          label: 'E-mail',
          value: 'joshua.ianacone@gmail.com',
        },
        {
          label: 'GitHub',
          value: 'github.com/ianacodev',
        },
      ],
    },
    skills: {
      title: 'Skills',
      items: [
        {
          label: 'HTML',
          value: null,
        },
        {
          label: 'CSS',
          value: null,
        },
        {
          label: 'SCSS',
          value: null,
        },
        {
          label: 'JavaScript',
          value: null,
        },
        {
          label: 'TypeScript',
          value: null,
        },
        {
          label: 'Angular',
          value: null,
        },
        {
          label: 'Angular Material',
          value: null,
        },
        {
          label: 'RxJS',
          value: null,
        },
        {
          label: 'NgRx',
          value: null,
        },
        {
          label: 'Jasmine',
          value: null,
        },
        {
          label: 'Adobe XD',
          value: null,
        },
      ],
    },
    experience: {
      title: 'Work History',
      items: [
        {
          role: 'Front End Software Engineer',
          company: 'Marlette Funding LLC, Wilmington, DE',
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
        {
          role: 'Technical Consultant',
          company:
            'Entech Consulting LLC Contracted To Barclaycard US, Wilmington, DE',
          beginDate: '2014-06',
          endDate: '2015-12',
          qualifications: [
            `Application support, analyzed issues related to Java and .Net applications for Barclaycard US.`,
            `Examined application logs and company databases to determine issues/defects in production environment.`,
            `Coordinated with other groups and teams for fixes and remediation to be implemented.`,
          ],
        },
        {
          role: 'Computer Engineer',
          company:
            'Scientific Search Contracted To Naval Surface Warfare Center, Philadelphia, PA',
          beginDate: '2013-02',
          endDate: '2013-06',
          qualifications: [
            `Defense Contractor at Naval Surface Warfare Center Carderock Division.`,
            `Worked with data acquisition systems for monitoring naval ships.`,
            `Developed software to obtain and analyze on board ship sensor data.`,
          ],
        },
        {
          role: 'Engineer / Software Developer (Internship)',
          company: 'South Jersey Technology Park, Glassboro, NJ',
          beginDate: '2011-05',
          endDate: '2012-01',
          qualifications: [
            `Funded by New Jersey Board of Public Utilities, developed anenergy assurance plan and energy reporting system for the state.`,
            `Researched and compiled detailed information on state's electrical, petroleum, and natural gas infrastructure.`,
            `Developed software to monitor, analyze, and store electrical outage information from major power utilities.`,
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          date: '2020',
          name: 'Vehicle Routing',
          description: `
          Developed responsive web application for managing and assigning drivers along with displaying vehicle stops for company delivery campaigns.
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
          date: '2020',
          name: 'Ultimate Angular Courses',
        },
        {
          date: '2014',
          name: 'Oracle Certified Associate, Java SE 7 Programmer',
        },
      ],
    },
  };
}
