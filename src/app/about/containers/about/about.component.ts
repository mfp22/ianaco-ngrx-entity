import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromProfileStore from '../../../profile/store';
// models
import { Personal } from '../../../profile/models';
import { Colorography, CalloutDetail } from '../../../shared/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  color = Colorography;
  details: CalloutDetail[] = [];
  personal$: Observable<Personal> | null = null;
  constructor(private store: Store<fromProfileStore.ProfileState>) {
    this.details = [
      {
        title: 'Creative',
        content: `
        Looking at things in a different way to provide new and fresh ideas.
        `,
        backgroundColor: Colorography.Bark500,
      },
      {
        title: 'Detailed',
        content: `
        Paying close attention to the small things which can have large impact.
        `,
        backgroundColor: Colorography.Bark500,
      },
      {
        title: 'Analytical',
        content: `
        Thinking through problems thoroughly to implement effective solutions.
        `,
        backgroundColor: Colorography.Bark500,
      },
    ];
  }

  ngOnInit(): void {
    this.personal$ = this.store.pipe(
      select(fromProfileStore.selectProfilePersonal)
    );
  }
}
