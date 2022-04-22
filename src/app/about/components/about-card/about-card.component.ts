import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent {
  summary = `
  Motivated Front End Engineer with experience building and maintaining 
  responsive websites. Extensive collaboration with teams to produce 
  sites that deliver business results. Strong interest in UI/UX.
`;
  personalInfo = [
    {
      label: 'Whats your name?',
      value: 'Josh Ianacone',
    },
    {
      label: 'Whats your contact?',
      value: 'joshua.ianacone@gmail.com',
    },
  ];
}
