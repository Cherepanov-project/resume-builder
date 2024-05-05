import ContainerDIV from './ContainerDIV';

export const props = {
  name: 'ContainerDIV',
  type: 'Simple Blocks',
  columns: 2,
  source: 'atoms',
  props: {
    style: {
      backgroundColor: 'white',
      display: 'flex', 
      flexDirection: 'row',
    },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
};

export default ContainerDIV;
