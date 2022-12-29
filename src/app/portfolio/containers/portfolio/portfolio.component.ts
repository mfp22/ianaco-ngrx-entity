import { Component, OnInit } from '@angular/core';
// models
import { GalleryItem } from '../../models';
import { Colorography } from '../../../shared/models';
// configs
import { portfolio } from '../../configs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  color = Colorography;
  animationMap: { [id: string]: boolean } = {};
  portfolio = portfolio;
  galleryItem: GalleryItem | null = null;

  ngOnInit() {
    this.galleryItem = this.portfolio.gallery[0];
  }

  /**
   * on in view
   */
  onInView(event: string) {
    this.animationMap[event] = true;
  }

  /**
   * on view
   * @param galleryItem
   */
  onView(galleryItem: GalleryItem) {
    this.galleryItem = null;
    setTimeout(() => {
      this.galleryItem = galleryItem;
    });
  }
}
