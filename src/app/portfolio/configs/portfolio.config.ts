// models
import { Portfolio } from '../models';

export const portfolio: Portfolio = {
  gallery: [
    {
      name: 'sports app',
      role: 'Designer & Developer',
      description:
        'Designer & developer for sports application landing pages promoting NFT (Non-fungible Token) digital assets.',
      branding: {
        colorPalette: ['#121212', '#FFC928', '#707070', '#FBFBFD'],
        typography: 'Roboto',
      },
      previewImage: 'assets/images/design/sports-app/sports-app-preview.jpg',
      primaryImage: 'assets/images/design/sports-app/sports-app-1.jpg',
      secondaryImage: 'assets/images/design/sports-app/sports-app-2.png',
      mobileImages: [
        'assets/images/design/sports-app/sports-app-mobile-1.png',
        'assets/images/design/sports-app/sports-app-mobile-2.png',
      ],
    },
    {
      name: 'yorker sports',
      role: 'Designer & Developer',
      description:
        'Designer & developer for sports application landing pages promoting NFT (Non-fungible Token) digital assets.',
      branding: {
        colorPalette: ['#061121', '#1099FA', '#707070', '#FBFBFD'],
        typography: 'Roboto',
      },
      previewImage: 'assets/images/design/yorker-app/yorker-app-preview.jpg',
      primaryImage: 'assets/images/design/yorker-app/yorker-app-desktop-1.png',
      secondaryImage:
        'assets/images/design/yorker-app/yorker-app-desktop-2.png',
      mobileImages: [
        'assets/images/design/sports-app/sports-app-mobile-1.png',
        'assets/images/design/sports-app/sports-app-mobile-2.png',
      ],
    },
    {
      name: 'investment app',
      role: 'Designer & Developer',
      description:
        'Designer & developer for my private investment application. Allows for strategy development for use with automated crypto trading.',
      branding: {
        colorPalette: ['#050505', '#061121', '#707070', '#ffffff'],
        typography: 'Roboto',
      },
      previewImage:
        'assets/images/design/investment-app/investment-app-preview.jpg',
      primaryImage:
        'assets/images/design/investment-app/investment-app-desktop-1.png',
      secondaryImage:
        'assets/images/design/investment-app/investment-app-desktop-2.png',
      mobileImages: [
        'assets/images/design/investment-app/investment-app-mobile-1.png',
        'assets/images/design/investment-app/investment-app-mobile-2.png',
      ],
    },
  ],
};
