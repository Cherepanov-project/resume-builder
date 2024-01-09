import LayoutBlockAnchor from './LayoutBlockAnchor';

export const props = {
  name: 'LayoutBlockAnchor',
  type: 'Simple Elements',
  source: 'atoms',
  props: {
    text: 'Link a',
    url: '#',
    wrapperStyle: {},
    titleStyle: { textAlign: 'center', fontSize: 30 },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
};

export default LayoutBlockAnchor;