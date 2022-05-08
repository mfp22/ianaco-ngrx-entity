// models
import { Item } from './common.model';
export interface ContentCard {
  title: string;
  image: string;
  links?: Item<string>[];
}
