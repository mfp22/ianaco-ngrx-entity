import { Component, Input } from '@angular/core';
// models
import { TimelineSegment } from '../../models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  @Input() segments: TimelineSegment[] | undefined;
}
