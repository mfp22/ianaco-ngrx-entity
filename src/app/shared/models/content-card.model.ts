// models
import { Item } from './common.model';
export interface ContentCard {
  title: string;
  image: string;
  fallbackImage: string;
  links?: Item<string>[];
}
