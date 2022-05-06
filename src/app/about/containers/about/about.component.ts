import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromProfileStore from '../../../profile/store';
// models
import { Personal } from '../../../profile/models';
import {
  Colorography,
  CalloutDetail,
  ContentCard,
} from '../../../shared/models';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  color = Colorography;
  details: CalloutDetail[] = [];
  personal$: Observable<Personal> | null = null;
  personalTraits = ['/Creative', '/Detailed', '/Effective'];
  workContentCard: ContentCard = {
    title: `Lorem ipsum dolor sit amet.`,
    image: 'assets/images/content/workarea-image.jpg',
  };
  skillContentCard: ContentCard = {
    title: `Lorem ipsum dolor sit amet.`,
    image: 'assets/images/content/chess-move-image.jpg',
  };

  constructor(private store: Store<fromProfileStore.ProfileState>) {}

  ngOnInit(): void {
    this.personal$ = this.store.pipe(
      select(fromProfileStore.selectProfilePersonal)
    );
  }
}
