// models
import { DetailItem } from 'src/app/shared/models';

export interface Portfolio {
  projects: DetailItem[];
}

export type Gallery = {
  name: string;
  description: string;
  brandColorImage: string;
  images: string[];
};
