import { T_BlockElement } from '@/types/landingBuilder';
import LayoutBlockParagraph from './LayoutBlockParagraph';

export const props: T_BlockElement = {
  name: 'LayoutBlockParagraph',
  type: 'Simple Elements',
  source: 'atoms',
  props: {
    text: 'You can create awesome and powerful landing pages with megapack and pixfort builder.',
    wrapperStyle: { textAlign: 'center' },
    textStyle: { fontSize: 16, margin: 0 },
    inputStyle: { width: '100%', border: 'none' },
  },
  layout: { i: '', x: 0, y: 0, w: 1, h: 4 },
};

export default LayoutBlockParagraph;
