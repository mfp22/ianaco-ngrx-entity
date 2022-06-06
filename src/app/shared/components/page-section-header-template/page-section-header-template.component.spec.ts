import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionHeaderTemplateComponent } from './page-section-header-template.component';

describe('PageSectionHeaderTemplateComponent', () => {
  let component: PageSectionHeaderTemplateComponent;
  let fixture: ComponentFixture<PageSectionHeaderTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSectionHeaderTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionHeaderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
