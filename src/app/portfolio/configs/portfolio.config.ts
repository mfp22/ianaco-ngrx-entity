// models
import { Portfolio } from '../models';

export const portfolio: Portfolio = {
  gallery: [
    {
      name: 'the bonkers cricket',
      role: 'Designer & Front End Developer',
      description:
        'Designer & Front End developer. Platform for providing cricket sports news and fantasy tournaments.',
      branding: {
        colorPalette: ['#fbfbfd', '#1099fa', '#f08a2c', '#595959'],
        typography: 'Roboto',
      },
      previewImage: 'assets/images/design/yorker-app/yorker-app-preview.jpg',
      primaryImage: 'assets/images/design/yorker-app/yorker-app-desktop-1.png',
      secondaryImage:
        'assets/images/design/yorker-app/yorker-app-desktop-2.png',
      mobileImages: [
        'assets/images/design/yorker-app/yorker-app-mobile-1.png',
        'assets/images/design/yorker-app/yorker-app-mobile-2.png',
      ],
    },
    {
      name: 'sports app',
      role: 'Designer',
      description:
        'Designer for sports application landing page promoting NFT (Non-fungible Token) digital assets.',
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
      name: 'investment app',
      role: 'Designer & Front End Developer',
      description:
        'Personal Private Project: Designer & Front End Developer investment application. Provides automated crypto trading, crypto strategy back testing, and stock investment calculator.',
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
