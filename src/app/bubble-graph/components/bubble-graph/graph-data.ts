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
  { label: 'SKILLS', color: '#a4c639', size: 60, group: 0, x: 0, y: 0 },
  {
    label: 'Angular',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'TypeScript',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'HTML',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'Angular Material',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'JavaScript',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'RxJS',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'SCSS',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'NgRx',
    size: Sizes.LG,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'Jasmine',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'CSS',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
  },
  {
    label: 'Adobe XD',
    size: Sizes.MD,
    group: 0,
    x: 0,
    y: 0,
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
  { source: 11, target: 0, strength: 0.2, distance: Distances.MD },
];

export const graphData = {
  nodes,
  links,
};
