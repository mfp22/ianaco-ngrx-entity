import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent {
  summary = `
  Motivated Front EndEngineer with experience building and maintaining 
  responsive websites. Extensive collaboration with teams to produce 
  sites that deliver business results. Strong interest in UI/UX.
`;
  personalInfo = [
    {
      label: 'Name',
      value: 'Josh Ianacone',
    },
    {
      label: 'Contact',
      value: 'joshua.ianacone@gmail.com',
    },
  ];
}
