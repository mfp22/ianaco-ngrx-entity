import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateContentComponent } from './animate-content.component';

describe('AnimateContentComponent', () => {
  let component: AnimateContentComponent;
  let fixture: ComponentFixture<AnimateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimateContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
