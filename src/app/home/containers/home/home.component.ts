import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromProfileStore from '../../../profile/store';
// models
import { Personal } from '../../../profile/models';
import { Colorography, ContentCard, DetailItem } from 'src/app/shared/models';
// animations
import { slideUpAppearAnimation } from 'src/app/shared/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideUpAppearAnimation],
})
export class HomeComponent implements OnInit {
  color = Colorography;
  personal$: Observable<Personal> | null = null;
  aboutContentCard: ContentCard = {
    title: `Providing valuable and impactful contributions.`,
    links: [{ label: 'About Me', value: 'about' }],
    image: 'assets/images/content/brainstorm-image.jpg',
  };
  resumeContentCard: ContentCard = {
    title: `Extensive collaboration with teams to deliver business results.`,
    links: [{ label: 'Resume', value: 'resume' }],
    image: 'assets/images/content/teamwork-image.jpg',
  };
  calloutDetails: DetailItem[] = [
    {
      title: 'Creative.',
      subtitle: 'ideas',
      content: `
      Looking at things in a different way to offer new and original ideas.
      `,
    },
    {
      title: 'Detailed.',
      subtitle: 'analysis',
      content: `
      Evaluating concepts and ideas thoroughly before implementation.
      `,
    },
    {
      title: 'Effective.',
      subtitle: 'solutions',
      content: `
      Building solutions that meet requirements and deliver results.
      `,
    },
  ];

  constructor(private store: Store<fromProfileStore.ProfileState>) {}

  ngOnInit(): void {
    this.personal$ = this.store.pipe(
      select(fromProfileStore.selectProfilePersonal)
    );
  }

  onScroll() {
    console.log('here i am');
  }
}
