import { Component } from '@angular/core';
// models
import { Portfolio, PortfolioCard } from '../../models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  get sortedCards(): { featured: PortfolioCard[]; general: PortfolioCard[] } {
    return this.portfolio.cards.reduce(
      (sortedCards: any, card) => {
        if (card.featured) {
          const featured = [...sortedCards.featured, card];
          return { ...sortedCards, featured };
        }
        const general = [...sortedCards.general, card];
        return { ...sortedCards, general };
      },
      { featured: [], general: [] }
    );
  }
  portfolio: Portfolio = {
    cards: [
      {
        title: 'Sample Demo App',
        subtitle:
          'Sample application to demo different concepts and functionality for angular and ngrx',
        image: 'assets/images/website-promo-min.png',
        name: 'sample-demo-app',
        links: {
          design:
            'https://xd.adobe.com/view/13fab039-c1c2-4297-bd21-5488a9ebd219-46a9/grid/',
          demo: 'https://ianacodev.github.io/sample-demo-app',
          code: 'https://github.com/ianacodev/sample-demo-app',
        },
        description: `
        This app is a generic product website, the user can view the featured product collection, 
        select a product item for detailed view, and add a new product to the collection.
        `,
        featured: true,
      },
      {
        title: 'Data Library',
        image: '',
        name: 'ngx-data-lib',
        description: 'hello world',
      },
      {
        title: 'Data Table Library',
        image: '',
        name: 'ngx-data-table-lib',
        description: 'hello world',
      },
      {
        title: 'Sample Redux Store',
        image: '',
        name: 'sample-redux-store',
        description: 'hello world',
      },
    ],
  };
}
