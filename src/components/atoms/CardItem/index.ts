import CardItem from './CardItem';

export const props = {
  name: 'CardItem',
  type: 'Composite Blocks',
  source: 'atoms',
  props: {
    title: '',
    description: '',
    text: 'Link a',
    url: '#',
    imgUrl: '',
    buttonText: '',
    wrapperStyle: {height: 'calc(100% - 37px)'},
    textStyle: { textAlign: 'center', fontSize: '30' },
    inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
    style: {backgroundColor: '',},
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 1, h: 4 },
};

export default CardItem;
