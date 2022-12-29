import { Component, Input, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
// models
import { Resume } from '../../models';
@Component({
  selector: 'app-resume-document',
  templateUrl: './resume-document.component.html',
  styleUrls: ['./resume-document.component.scss'],
})
export class ResumeDocumentComponent {
  @Input() resume: Resume | null = null;
  @ViewChild('nav') ds: DragScrollComponent | undefined;

  moveLeft() {
    this.ds?.moveLeft();
  }

  moveRight() {
    this.ds?.moveRight();
  }
}
