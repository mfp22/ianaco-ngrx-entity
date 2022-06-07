import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
// models
import { Colorography, DetailItem } from '../../../shared/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  animationMap: { [id: string]: boolean } = {};
  projects$: Observable<DetailItem[]> | null = null;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.projects$ = this.store.pipe(select(fromStore.selectProjects));
  }

  /**
   * on in view
   */
  onInView(event: string) {
    this.animationMap[event] = true;
  }
}
