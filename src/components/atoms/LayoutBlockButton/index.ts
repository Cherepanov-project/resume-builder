import LayoutBlockButton from './LayoutBlockButton';
import { nanoid } from 'nanoid';

export const props = {
  name: 'LayoutBlockButton',
  type: 'Simple Blocks',
  source: 'atoms',
  props: {
    text: 'CLICK ME',
    url: '#',
    wrapperStyle: { textAlign: 'center' },
    textStyle: { fontSize: '16px' },
    inputStyle: { width: '100%', height: '100%', border: 'none' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 2 },
};

export default LayoutBlockButton;
