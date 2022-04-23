import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionTemplateComponent } from './page-section-template.component';

describe('PageSectionTemplateComponent', () => {
  let component: PageSectionTemplateComponent;
  let fixture: ComponentFixture<PageSectionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSectionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
