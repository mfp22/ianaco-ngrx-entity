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
        image: 'assets/images/sample-demo-app-promo-min.png',
        name: 'sample-demo-app',
        links: {
          design:
            'https://xd.adobe.com/view/13fab039-c1c2-4297-bd21-5488a9ebd219-46a9/grid/',
          demo: 'https://ianacodev.github.io/sample-demo-app',
          repo: 'https://github.com/ianacodev/sample-demo-app',
        },
        description: `
        This app is a generic product website, the user can view the featured product collection, 
        select a product item for detailed view, and add a new product to the collection.
        `,
        featured: true,
      },
      {
        title: 'About Me',
        name: 'ngx-data-lib',
        description: 'Simple personal website built using angular.',
        links: {
          repo: 'https://github.com/ianacodev/about-me',
        },
      },
      {
        title: 'Data Table Library',
        name: 'ngx-data-table-lib',
        description: 'Custom library for configurable table to display data.',
        links: {
          repo: 'https://github.com/ianacodev/ngx-data-table-lib',
        },
      },
      {
        title: 'Sample Redux Store',
        name: 'sample-redux-store',
        description:
          'Sample redux store for understanding concepts based on an online tutorial.',
        links: {
          repo: 'https://github.com/ianacodev/sample-redux-store',
        },
      },
      {
        title: 'Typescript Basics',
        name: 'typescript_basics',
        description:
          'Sample scripts based on concepts from an online tutorial.',
        links: {
          repo: 'https://github.com/ianacodev/typescript_basics',
        },
      },
      {
        title: 'Example Scripts',
        name: 'example_scripts',
        description: 'Example scripts for demoing es6+ basics.',
        links: {
          repo: 'https://github.com/ianacodev/example_scripts',
        },
      },
      {
        title: 'XHR Examples',
        name: 'XHRExamples',
        description: 'Some xhr examples for demoing.',
        links: {
          repo: 'https://github.com/ianacodev/XHRExamples',
        },
      },
    ],
  };
}
