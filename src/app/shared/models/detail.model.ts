// models
import { Item } from './common.model';

export interface DetailItemStatic {
  title: string;
  name: string;
  subtitle: string;
  content: string;
  backgroundColor?: string;
  links: Item<string>[];
}

export type DetailItem = Partial<DetailItemStatic>;
