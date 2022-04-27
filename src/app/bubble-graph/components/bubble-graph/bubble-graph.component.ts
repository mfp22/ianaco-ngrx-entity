import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
// data
import { graphData } from './graph-data';

@Component({
  selector: 'app-bubble-graph',
  templateUrl: './bubble-graph.component.html',
  styleUrls: ['./bubble-graph.component.scss'],
})
export class BubbleGraphComponent implements AfterViewInit, OnDestroy {
  nodes = graphData.nodes;
  activeIndex: number = -1;
  ngUnsubscribe$ = new Subject<void>();
  @Input() size: number = 500;
  constructor() {}

  ngAfterViewInit(): void {
    const indexLimit = this.nodes.length;
    let count = 0;
    timer(1000, 1000)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(() => {
        if (count === indexLimit) {
          count = 0;
        }
        this.activeIndex = count;
        count++;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
