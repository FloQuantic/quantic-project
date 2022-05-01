export interface ColorInfo {
  name: string;
  hex?: string;
  rgb?: string;
  hsl?: string;
}

export const DEFAULT_COLORS: ColorInfo[] = [
  {
    name: 'black',
    hex: '#353535',
  },
  {
    name: 'white',
    hex: '#FFFFFF',
  },
  {
    name: 'red',
    hex: '#b93a32',
  },
  {
    name: 'green',
    hex: '#00c08d',
  },
  {
    name: 'yellow',
    hex: '#d8ae47',
  },
  {
    name: 'blue-l5',
    hex: '#f8fbfc',
  },
  {
    name: 'blue-l4',
    hex: '#e9f0f6',
  },
  {
    name: 'blue-l3',
    hex: '#d3e1ee',
  },
  {
    name: 'blue-l2',
    hex: '#bdd2e5',
  },
  {
    name: 'blue-l1',
    hex: '#a7c4dd',
  },
  {
    name: 'blue',
    hex: '#92b6d5',
  },
  {
    name: 'blue-d1',
    hex: '#77a3ca',
  },
  {
    name: 'blue-d2',
    hex: '#5d92c0',
  },
  {
    name: 'blue-d3',
    hex: '#4681b4',
  },
  {
    name: 'blue-d4',
    hex: '#3c6e9a',
  },
  {
    name: 'blue-d5',
    hex: '#325c81',
  },
];
