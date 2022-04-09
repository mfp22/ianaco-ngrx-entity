export interface Links {
  design: string;
  demo: string;
  code: string;
}

export interface PortfolioCard {
  title: string;
  subtitle?: string;
  image: string;
  name: string;
  description: string;
  links?: Partial<Links>;
  featured?: boolean;
}

export interface Portfolio {
  cards: PortfolioCard[];
}
