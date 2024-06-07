import RadioButtons from './RadioButtons';

export const props = {
  name: 'RadioButtons',
  type: 'Selectors',
  // name: 'RadioGroup',
  // type: 'CheckBoxes',
  source: 'atoms',
  props: {
    style: { backgroundStyle: '#ffffff' },
    wrapperStyle: { height:'calc(100% - 37px)' },
  },
  children: [],
  layout: { i: null, x: 0, y: 0, w: 1, h: 3 },
};

export default RadioButtons;
