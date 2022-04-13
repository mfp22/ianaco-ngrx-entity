import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent {
  segments = [
    {
      label: 'Josh Ianacone',
      sizePx: 28,
    },
    {
      label: 'Front End Software Engineer',
      sizePx: 16,
    },
    {
      label: 'joshua.ianacone@gmail.com',
      sizePx: 16,
    },
  ];
}
