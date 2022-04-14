import { Component, Input } from '@angular/core';
// models
import { Resume } from '../../models';
@Component({
  selector: 'app-resume-document',
  templateUrl: './resume-document.component.html',
  styleUrls: ['./resume-document.component.scss'],
})
export class ResumeDocumentComponent {
  @Input() resume: Resume | undefined;
}
