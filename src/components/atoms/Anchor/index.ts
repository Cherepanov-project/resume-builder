import Anchor from './Anchor';

export const props = {
  name: 'Anchor',
  type: 'Navigation',
  // name: 'LayoutBlockAnchor',
  // type: 'Composite Blocks',
  source: 'atoms',
  props: {
    text: 'Link a',
    url: '#',
    wrapperStyle: {height:'calc(100% - 37px)'},
    textStyle: { color: 'black', letterSpacing: '1px', textAlign: 'center', fontSize: '20px'  },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 1, h: 2 },
};

export default Anchor;
