export interface Links {
  design: string;
  demo: string;
  repo: string;
}

export interface PortfolioCard {
  title: string;
  subtitle?: string;
  name: string;
  description: string;
  image?: string;
  links?: Partial<Links>;
  featured?: boolean;
}

export interface Portfolio {
  cards: PortfolioCard[];
}
