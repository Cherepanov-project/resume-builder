import Logo from './Logo';

export const props = {
  name: 'Logo',
  type: 'Composite Blocks',
  source: 'atoms',
  props: {
    text: 'Link a',
    url: '#',
    imgUrl: '',
    wrapperStyle: {height: 'calc(100% - 37px)'},
    textStyle: { textAlign: 'center', fontSize: '30' },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
    style:{background: ''},
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 1, h: 2 },
};

export default Logo;
