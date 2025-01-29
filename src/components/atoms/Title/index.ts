import { T_BlockElement } from '@/types/landingBuilder';
import Title from './Title';

export const props: T_BlockElement = {
  name: 'Title',
  type: 'Text',
  // name: 'LayoutBlockTitle',
  // type: 'Text Blocks',
  source: 'atoms',
  props: {
    key: 'title',
    text: 'Default Title',
    wrapperStyle: { height: 'calc(100% - 37px)'},
    textStyle: { color: 'black', letterSpacing: '1px', textAlign: 'center', fontSize: '20px'  },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold', margin: '0', },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
};

export default Title;
