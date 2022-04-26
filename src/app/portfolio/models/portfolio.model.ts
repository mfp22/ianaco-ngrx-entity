export interface Link {
  label: string;
  url: string;
}

export interface PortfolioCard {
  title: string;
  name: string;
  type: string;
  description: string;
  subtitle?: string;
  image?: string;
  links?: Link[];
  featured?: boolean;
}

export interface PortfolioCardSets {
  featured: PortfolioCard[];
  general: PortfolioCard[];
}

export interface Portfolio {
  cards: PortfolioCard[];
}
