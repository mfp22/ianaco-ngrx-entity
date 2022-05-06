import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromProfileStore from '../../../profile/store';
// models
import { Personal } from '../../../profile/models';
import {
  Colorography,
  ContentCard,
  CalloutDetail,
} from 'src/app/shared/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  color = Colorography;
  personal$: Observable<Personal> | null = null;
  aboutContentCard: ContentCard = {
    title: `Providing value and focusing on critical areas.`,
    linkLabel: 'More About Me',
    link: 'about',
    image: 'assets/images/content/brainstorm-image.png',
  };
  resumeContentCard: ContentCard = {
    title: `Extensive collaboration with teams to deliver results.`,
    linkLabel: 'Resume',
    link: 'resume',
    image: 'assets/images/content/teamwork-image.png',
  };
  calloutDetails: CalloutDetail[] = [
    {
      title: 'Creative',
      subtitle: 'ideas',
      content: `
      Looking at things in a different way to offer up  new  and original ideas.
      `,
    },
    {
      title: 'Critical',
      subtitle: 'thinking',
      content: `
      Thinking through issues thoroughly and in a detailed way.
      `,
    },
    {
      title: 'Innovative',
      subtitle: 'solutions',
      content: `
      Solving problems  effectively for optimal results.
      `,
    },
  ];

  constructor(private store: Store<fromProfileStore.ProfileState>) {}

  ngOnInit(): void {
    this.personal$ = this.store.pipe(
      select(fromProfileStore.selectProfilePersonal)
    );
  }
}
