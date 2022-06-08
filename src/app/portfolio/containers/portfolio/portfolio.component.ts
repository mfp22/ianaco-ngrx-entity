import { Component } from '@angular/core';
// models
import { Gallery } from '../../models';
import { Colorography } from '../../../shared/models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  color = Colorography;
  animationMap: { [id: string]: boolean } = {};
  gallery: Gallery = {
    name: 'sports app',
    role: 'Designer & Developer',
    description:
      'Designer & developer for sports application landing pages promoting NFT (Non-fungible Token) digital assets.',
    branding: {
      colorPalette: ['#121212', '#FFC928', '#707070', '#FBFBFD'],
      typography: 'Roboto',
    },
    primaryImage: 'assets/images/design/sports-app/sports-app-1.jpg',
    secondaryImage: 'assets/images/design/sports-app/sports-app-2.png',
    mobileImages: [
      'assets/images/design/sports-app/sports-app-mobile-1.png',
      'assets/images/design/sports-app/sports-app-mobile-2.png',
    ],
  };

  /**
   * on in view
   */
  onInView(event: string) {
    this.animationMap[event] = true;
  }
}
