import SocialMediaIcon from './SocialMediaIcon';

export const props = {
  name: 'SocialMediaIcon',
  type: 'Composite Blocks',
  source: 'atoms',
  props: {
    text: 'Link a',
    url: '#',
    imgUrl: '',
    wrapperStyle: {},
    textStyle: { textAlign: 'center', fontSize: '30' },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
};

export default SocialMediaIcon;
