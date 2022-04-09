import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFeaturedCardComponent } from './portfolio-featured-card.component';

describe('PortfolioFeaturedCardComponent', () => {
  let component: PortfolioFeaturedCardComponent;
  let fixture: ComponentFixture<PortfolioFeaturedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioFeaturedCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFeaturedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
