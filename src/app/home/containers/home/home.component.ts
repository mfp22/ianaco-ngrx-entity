import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromProfileStore from '../../../profile/store';
// models
import { Personal } from '../../../profile/models';
import { Colorography } from 'src/app/shared/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  color = Colorography;
  message$: Observable<string> | null = null;

  constructor(private store: Store<fromProfileStore.ProfileState>) {}

  ngOnInit(): void {
    this.message$ = this.store.pipe(
      select(fromProfileStore.selectProfilePersonal),
      map(
        (personal) =>
          `Motivated ${personal.occupationType} ${personal.occupation} with experience 
          building and maintaining responsive websites.`
      )
    );
  }
}
