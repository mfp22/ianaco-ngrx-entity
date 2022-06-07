// models
import { DetailItem } from 'src/app/shared/models';

export interface Portfolio {
  projects: DetailItem[];
}

export interface Branding {
  colorPalette: string[];
  typography: string;
}

export type Gallery = {
  name: string;
  role: string;
  description: string;
  branding: Branding;
  primaryImage: string;
  secondaryImage: string;
  mobileImages: string[];
};
