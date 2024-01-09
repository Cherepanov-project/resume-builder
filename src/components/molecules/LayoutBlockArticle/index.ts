import LayoutBlockArticle from './LayoutBlockArticle';

export const props = {
  name: 'LayoutBlockArticle',
  type: 'Articles',
  source: 'molecules',
  columns: 2,
  props: {},
  children: [
    {
      name: 'LayoutBlockTitle',
      source: 'atoms',
      props: {
        text: 'Default Title',
        titleStyle: { textAlign: 'center', fontSize: 30 },
        inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
      },
      layout: { i: '1', x: 0, y: 0, w: 2, h: 2 },
    },
    {
      name: 'LayoutBlockParagraph',
      source: 'atoms',
      props: {
        text: 'You can create awesome and powerful landing pages with megapack and pixfort builder.',
        wrapperStyle: { textAlign: 'center' },
        textStyle: { fontSize: 16, margin: 0 },
        inputStyle: { width: '100%', border: 'none' },
      },
      layout: { i: '2', x: 0, y: 0, w: 2, h: 3 },
    },
  ],
  layout: { i: null, x: 0, y: 0, w: 2, h: 5 },
};

export default LayoutBlockArticle;
