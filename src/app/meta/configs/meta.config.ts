// models
import { MetaDefinitionNames, AppMeta, MetaConfig } from '../models';
import { RouterSegments } from 'src/app/models';

const metaBrandTag = 'Ianaco';

// default
const defaultMeta: AppMeta = {
  name: RouterSegments.Main,
  title: `Software Engineer - front end - developer | ${metaBrandTag}`,
  routerSegment: RouterSegments.Main,
  metaDefinitions: [
    {
      name: MetaDefinitionNames.description,
      content:
        'Front end developer with experience building and maintaining responsive websites.',
    },
  ],
};

// main
const mainMeta: AppMeta = {
  name: RouterSegments.Main,
  title: `Software Engineer - front end - developer | ${metaBrandTag}`,
  routerSegment: RouterSegments.Main,
  metaDefinitions: [
    {
      name: MetaDefinitionNames.description,
      content:
        'Motivated Front End developer with experience building and maintaining responsive websites.',
    },
  ],
};

// about
const aboutMeta: AppMeta = {
  name: RouterSegments.About,
  title: `Creative - Detailed - Effective | ${metaBrandTag}`,
  routerSegment: RouterSegments.About,
  metaDefinitions: [
    {
      name: MetaDefinitionNames.description,
      content:
        'Providing quality through experience and learning. Honing skills to meet needs and demands.',
    },
  ],
};

// live scores
const portfolioMeta: AppMeta = {
  name: RouterSegments.Portfolio,
  title: `Sample Designs & Builds | ${metaBrandTag}`,
  routerSegment: RouterSegments.Portfolio,
  metaDefinitions: [
    {
      name: MetaDefinitionNames.description,
      content: `Experience designing and building responsive websites.`,
    },
  ],
};

// projects
const projectsMeta: AppMeta = {
  name: RouterSegments.Projects,
  title: `Personal development projects | ${metaBrandTag}`,
  routerSegment: RouterSegments.Projects,
  metaDefinitions: [
    {
      name: MetaDefinitionNames.description,
      content: `Some personal projects developed for demoing and implementing different concepts and functionality.`,
    },
  ],
};

// resume
const resumeMeta: AppMeta = {
  name: RouterSegments.Resume,
  title: `Resume - skills - experience | ${metaBrandTag}`,
  routerSegment: RouterSegments.Resume,
  metaDefinitions: [
    {
      name: MetaDefinitionNames.description,
      content: `Motivated Front End Engineer with experience building and maintaining responsive websites.`,
    },
  ],
};

// meta config
export const metaConfig: MetaConfig = {
  default: mainMeta,
  [mainMeta.name]: mainMeta,
  [aboutMeta.name]: aboutMeta,
  [portfolioMeta.name]: portfolioMeta,
  [projectsMeta.name]: projectsMeta,
  [resumeMeta.name]: resumeMeta,
};
