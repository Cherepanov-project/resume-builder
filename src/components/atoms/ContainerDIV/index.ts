import ContainerDIV from './ContainerDIV';

export const props = {
  name: 'ContainerDIV',
  type: 'LayoutElements',
  columns: 2,
  source: 'atoms',
  props: {
    style: {
      backgroundColor: 'white',
      display: 'flex', 
      flexDirection: 'row',
      height: 'calc(100% - 37px)'
    },
  },
  children: [],
  layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
};

export default ContainerDIV;
