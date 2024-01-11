import LayoutBlockButton from './LayoutBlockButton';

export const props = {
  name: 'LayoutBlockButton',
  type: 'Simple Elements',
  source: 'atoms',
  props: {
    text: 'CLICK ME',
    url: '#',
    wrapperStyle: { textAlign: 'center' },
    textStyle: { fontSize: '16px' },
    inputStyle: { width: '100%', height: '100%', border: 'none' },
  },
  layout: { i: null, x: 0, y: 0, w: 1, h: 1 },
};

export default LayoutBlockButton;