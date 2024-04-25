import MultiToggle from './MultiToggle';

export const props = {
  name: 'MultiToggle',
  type: 'Selectors',
  // name: 'MultiToggle',
  // type: 'CheckBoxes',
  columns: 2,
  source: 'atoms',
  props: {
    style: { backgroundColor: 'white', color: '', border: '', text: '' },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
};

export default MultiToggle;
