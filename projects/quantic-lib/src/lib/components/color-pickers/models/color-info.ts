export interface ColorInfo {
  [name: string]: string;
}

export const DEFAULT_COLORS: ColorInfo = {
  black: '#353535',
  white: '#FFFFFF',
  red: '#b93a32',
  green: '#00c08d',
  yellow: '#d8ae47',
  'blue-l5': '#f8fbfc',
  'blue-l4': '#e9f0f6',
  'blue-l3': '#d3e1ee',
  'blue-l2': '#bdd2e5',
  'blue-l1': '#a7c4dd',
  blue: '#92b6d5',
  'blue-d1': '#77a3ca',
  'blue-d2': '#5d92c0',
  'blue-d3': '#4681b4',
  'blue-d4': '#3c6e9a',
  'blue-d5': '#325c81',
};

export const BLACK_FONTS_COLORS = [
  'white',
  'yellow',
  'blue-l5',
  'blue-l4',
  'blue-l3',
  'blue-l2',
  'blue-l1',
  'blue',
];

export const WHITE_FONTS_COLORS = [
  'black',
  'red',
  'green',
  'blue-d5',
  'blue-d4',
  'blue-d3',
  'blue-d2',
  'blue-d1',
];

export const ALL_COLORS = [...BLACK_FONTS_COLORS, ...WHITE_FONTS_COLORS];
