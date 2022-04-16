import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// store
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
// models
import { Resume } from './../../models';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  resume$: Observable<Resume> | null = null;

  constructor(private store: Store<fromStore.ResumeState>) {}

  ngOnInit(): void {
    this.resume$ = this.store.pipe(
      select(fromStore.selectResume)
    ) as Observable<Resume>;
  }
}
