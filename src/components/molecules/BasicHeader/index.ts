import BasicHeader from "./BasicHeader";

export const props = {
  name: 'BasicHeader',
  type: 'Headers',
  source: 'molecules',
  columns: 2,
  children: [
    {
      name: 'Logo',
      source: 'atoms',
      props: {
        text: 'MegaPack',
        url: '',
        imgUrl: '',
        wrapperStyle: { textAlign: 'center' },
        textStyle: { fontSize: 30, marginTop: 16 },
        inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
      },
      layout: { i: '', x: 0, y: 0, w: 2, h: 2 },
    },
    {
      name: 'Anchor',
      source: 'atoms',
      props: {
        text: 'about',
        url: '#',
        wrapperStyle: { textAlign: 'center' },
        textStyle: { fontSize: 16, margin: 0 },
        inputStyle: { width: '100%', border: 'none' },
      },
      layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
    },
    {
        name: 'Anchor',
        source: 'atoms',
        props: {
          text: 'menu',
          url: '#',
          wrapperStyle: { textAlign: 'center' },
          textStyle: { fontSize: 16, margin: 0 },
          inputStyle: { width: '100%', border: 'none' },
        },
        layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
    },
    {
        name: 'Anchor',
        source: 'atoms',
        props: {
          text: 'contacts',
          url: '#',
          wrapperStyle: { textAlign: 'center' },
          textStyle: { fontSize: 16, margin: 0 },
          inputStyle: { width: '100%', border: 'none' },
        },
        layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
    },
    {
        name: 'SocialMediaIcon',
        source: 'atoms',
        props: {
          text: 'contacts',
          url: '#',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/72px-VK_Compact_Logo_%282021-present%29.svg.png',
          wrapperStyle: { textAlign: 'center' },
          textStyle: { fontSize: 16, margin: 0 },
          inputStyle: { width: '100%', border: 'none' },
        },
        layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
    },
    {
        name: 'SocialMediaIcon',
        source: 'atoms',
        props: {
          text: 'contacts',
          url: '#',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/72px-VK_Compact_Logo_%282021-present%29.svg.png',
          wrapperStyle: { textAlign: 'center' },
          textStyle: { fontSize: 16, margin: 0 },
          inputStyle: { width: '100%', border: 'none' },
        },
        layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
    },
    {
        name: 'SocialMediaIcon',
        source: 'atoms',
        props: {
          text: 'contacts',
          url: '#',
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/72px-VK_Compact_Logo_%282021-present%29.svg.png',
          wrapperStyle: { textAlign: 'center' },
          textStyle: { fontSize: 16, margin: 0 },
          inputStyle: { width: '100%', border: 'none' },
        },
        layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
    },
  ],
  layout: { i: '', x: 0, y: 0, w: 2, h: 5 },
};

export default BasicHeader;
