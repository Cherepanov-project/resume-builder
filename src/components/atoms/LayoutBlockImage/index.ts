import LayoutBlockImage from './LayoutBlockImage';

export const props = {
  name: 'LayoutBlockImage',
  type: 'Simple Elements',
  source: 'atoms',
  props: {
    text: 'https://tinyjpg.com/images/social/website.jpg',
    wrapperStyle: { textAlign: 'center' },
    textStyle: { width: '100%', height: '100%', border: 'none' },
  },
  layout: { i: null, x: 0, y: 0, w: 1, h: 4 },
};

export default LayoutBlockImage;