import LayoutBlockSlider from './LayoutBlockSlider';

export const props = {
  name: 'LayoutBlockSlider',
  type: 'Simple Elements',
  source: 'atoms',
  props: {
    text: 'default',
    wrapperStyle: { height: 'calc(100% - 38px)' },
    textStyle: { width: '100%', height: '100%', border: 'none' },
  },
  layout: { i: null, x: 0, y: 0, w: 3, h: 10 },
};

export default LayoutBlockSlider;
