import { Component } from '@angular/core';
import { ProjectStore } from '../../projects.store';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  animationMap: { [id: string]: boolean } = {};
  projects$ = this.store.store.all$;

  constructor(private store: ProjectStore) {}

  /**
   * on in view
   */
  onInView(event: string) {
    this.animationMap[event] = true;
  }
}
