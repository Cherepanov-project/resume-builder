import { nanoid } from 'nanoid';
import Accordion from './Accordion';

export const props = {
  name: 'Accordion',
  type: 'Composite Blocks',
  source: 'atoms',
  props: {
    accordion: [],
    wrapperStyle: {},
    textStyle: { textAlign: 'center', fontSize: '30' },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  children: [],
  layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
};

export default Accordion;
