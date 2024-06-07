import { T_BlockElement } from '@/types/landingBuilder';

import HeaderTitle from './HeaderTitle';

export const props: T_BlockElement = {
  name: 'HeaderTitle',
  type: 'Text',
  // name: 'TitleH1',
  // type: 'Text',
  source: 'atoms',
  props: { 
    text: 'Заголовок H1', 
    key: 'title',
    wrapperStyle: { height: 'calc(100% - 37px)'},
    textStyle: {color: 'black', letterSpacing: '1px', textAlign: 'center', fontSize: '20px' },
    inputStyle: { width: '100%', height: '100%', border: 'none', fontWeight: 'bold', margin: '0' },
    style: { backgroundColor: '', border: '' },
},
  children: [],
  layout: { i: '', x: 1, y: 1, w: 1, h: 2 },
};

export default HeaderTitle;
