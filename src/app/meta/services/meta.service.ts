import { Injectable, OnDestroy } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { switchMap, filter, tap, takeUntil } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromAppStore from '../../store';
import * as fromMetaStore from '../store';
// models
import { AppMeta } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MetaService implements OnDestroy {
  ngUnsubscribe$ = new Subject<void>();

  constructor(
    private title: Title,
    private meta: Meta,
    private store: Store<any>
  ) {}

  ngOnDestroy(): void {
    this.stop();
  }

  /**
   * start
   */
  start() {
    const routerState$ = this.store
      .pipe(select(fromAppStore.selectRouterState))
      .pipe(filter(Boolean));
    // on router change update meta
    routerState$
      .pipe(
        switchMap(({ url }) =>
          this.store.pipe(select(fromMetaStore.selectMetaConfigByUrl(url)))
        ),
        filter(Boolean),
        tap((appMeta) => this.store.dispatch(fromMetaStore.setMeta(appMeta))),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe((appMeta: AppMeta) => {
        const { title, metaDefinitions } = appMeta;
        this.setTitle(title);
        this.updateMetaDefinitions(metaDefinitions);
      });
  }

  /**
   * set title
   * @param title
   */
  private setTitle(title: string) {
    this.title.setTitle(title);
  }

  /**
   * update meta definitions
   * @param meta definitions
   */
  private updateMetaDefinitions(metaDefinitions: MetaDefinition[]) {
    metaDefinitions.forEach((metaDefinition) =>
      this.meta.updateTag(metaDefinition)
    );
  }

  /**
   * stop
   */
  stop() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
