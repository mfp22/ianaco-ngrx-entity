import { MetaDefinition } from '@angular/platform-browser';
// models
import { RouterSegments } from '../../models';

export enum MetaNames {
  App = 'app',
  Blog = 'blog',
}

export enum MetaDefinitionNames {
  description = 'description',
}

export interface AppMeta {
  name: string;
  title: string;
  routerSegment: RouterSegments;
  metaDefinitions: MetaDefinition[];
}

export interface MetaConfig {
  [key: string]: AppMeta;
}
