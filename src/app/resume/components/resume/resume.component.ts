import { Component, OnInit } from '@angular/core';
// models
import { Resume } from './../../models';
// configs
import { resume } from '../../configs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  resume: Resume = resume;
}
