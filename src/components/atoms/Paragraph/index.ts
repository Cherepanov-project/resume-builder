import { T_BlockElement } from '@/types/landingBuilder';
import Paragraph from './Paragraph';

export const props: T_BlockElement = {
  name: 'Paragraph',
  type: 'Text',
  // name: 'LayoutBlockParagraph',
  // type: 'Text Blocks',
  source: 'atoms',
  props: {
    key: 'paragraph',
    text: 'You can create awesome and powerful landing pages with megapack and pixfort builder.',
    wrapperStyle: { height: 'calc(100% - 37px)'},
    textStyle: { color: 'black', letterSpacing: '1px', textAlign: 'center', fontSize: '20px'},
    inputStyle: { width: '100%', border: 'none', margin: '0' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  layout: { i: '', x: 0, y: 0, w: 2, h: 4 },
};

export default Paragraph;
