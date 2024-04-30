import Image from './Image';

export const props = {
  name: 'Image',
  type: 'Images',
  source: 'atoms',
  props: {
    text: 'https://tinyjpg.com/images/social/website.jpg',
    wrapperStyle: { textAlign: 'center' },
    textStyle: { width: '100%', height: '100%', border: 'none' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  layout: { i: null, x: 0, y: 0, w: 1, h: 4 },
};

export default Image;
