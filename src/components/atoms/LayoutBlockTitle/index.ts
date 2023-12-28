import { T_BlockElement } from '@/types/landingBuilder';
import LayoutBlockTitle from './LayoutBlockTitle';

export const props: T_BlockElement = {
  name: 'LayoutBlockTitle',
  type: 'Simple Elements',
  source: 'atoms',
  props: {
    text: 'Default Title',
    wrapperStyle: {},
    textStyle: { textAlign: 'center', fontSize: 30 },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
};

export default LayoutBlockTitle;
