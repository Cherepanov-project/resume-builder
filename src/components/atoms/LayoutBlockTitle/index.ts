import { T_BlockElement } from '@/types/landingBuilder';
import LayoutBlockTitle from './LayoutBlockTitle';

export const props: T_BlockElement = {
  name: 'LayoutBlockTitle',
  type: 'Text Blocks',
  source: 'atoms',
  props: {
    key: 'title',
    text: 'Default Title',
    wrapperStyle: {},
    textStyle: { textAlign: 'center', fontSize: '30px' },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
};

export default LayoutBlockTitle;
