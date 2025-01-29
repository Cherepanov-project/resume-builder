import Checkboxes from './Checkboxes';

export const props = {
  name: 'Checkboxes',
  type: 'Selectors',
  // name: 'CheckboxGroup',
  // type: 'CheckBoxes',
  source: 'atoms',
  props: {
    style: {backgroundStyle: '#ffffff'},
    wrapperStyle: {height:'calc(100% - 37px)'},
  },
  children: [],
  layout: { i: null, x: 0, y: 0, w: 1, h: 3 },
};

export default Checkboxes;
