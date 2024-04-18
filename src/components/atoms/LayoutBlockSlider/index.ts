import LayoutBlockSlider from './LayoutBlockSlider';

export const props = {
  name: 'LayoutBlockSlider',
  type: 'Composite Blocks',
  source: 'atoms',
  props: {
    text: '',
    LayoutBlockSlider: [],
    wrapperStyle: { height: '100%' },
    textStyle: { width: '100%', height: '100%', border: 'none' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  layout: { i: null, x: 0, y: 0, w: 3, h: 15 },
};

export default LayoutBlockSlider;
