enum Sizes {
  SM = 35,
  MD = 45,
  LG = 68,
}

enum Distances {
  SM = 100,
  MD = 200,
  LG = 300,
}

const nodes = [
  {
    label: 'Angular',
    size: Sizes.LG,
    group: 0,
    color: '',
    x: 0,
    y: 0,
    logo: 'assets/logos/angular.svg',
  },
  {
    label: 'NgRx',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/ngrx.svg',
  },
  {
    label: 'RxJS',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/rxjs.svg',
  },
  {
    label: 'TypeScript',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/typescript.svg',
  },
  {
    label: 'JavaScript',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/javascript.svg',
  },
  {
    label: 'HTML',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/html.svg',
  },
  {
    label: 'SCSS',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/sass.svg',
  },
  {
    label: 'CSS',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/css.svg',
  },
  {
    label: 'Angular Material',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/material.svg',
  },
  {
    label: 'Jasmine',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/jasmine.svg',
  },
  {
    label: 'Adobe XD',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
    logo: 'assets/logos/adobe-xd.svg',
  },
];

const links = [
  { source: 1, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 2, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 3, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 4, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 5, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 6, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 7, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 8, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 9, target: 0, strength: 0.2, distance: Distances.MD },
  { source: 10, target: 0, strength: 0.2, distance: Distances.MD },
  // { source: 11, target: 0, strength: 0.2, distance: Distances.MD },
];

export const graphData = {
  nodes,
  links,
};
