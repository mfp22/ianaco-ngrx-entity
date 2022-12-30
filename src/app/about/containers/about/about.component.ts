import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromProfileStore from '../../../profile/store';
// models
import { Personal } from '../../../profile/models';
import { color, ContentCard, DetailItem } from '../../../shared/models';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  color = color;
  personal$: Observable<Personal> | null = null;
  animationMap: { [key: string]: boolean } = {};
  calloutDetails: DetailItem[] = [
    {
      title: 'Creative',
    },
    {
      title: 'Detailed',
    },
    {
      title: 'effective',
    },
  ];
  workContentCard: ContentCard = {
    title: `Providing quality through experience and learning.`,
    links: [
      { label: 'Resume', value: 'resume' },
      { label: 'Portfolio', value: 'portfolio' },
      { label: 'Projects', value: 'projects' },
    ],
    image: 'assets/images/content/workarea-image.jpg',
  };
  skillContentCard: ContentCard = {
    title: `Honing skills to meet needs and demands.`,
    image: 'assets/images/content/chess-move-image.jpg',
  };

  constructor(private store: Store<fromProfileStore.ProfileState>) {}

  ngOnInit(): void {
    this.personal$ = this.store.pipe(
      select(fromProfileStore.selectProfilePersonal)
    );
  }

  /**
   * on in view
   */
  onInView(event: string) {
    this.animationMap[event] = true;
  }
}
