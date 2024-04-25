import ModalWindow from './ModalWindow';

export const props = {
  name: 'ModalWindow',
  type: 'Interactive',
  // name: 'LayoutBlockModal',
  // type: 'Text Blocks',
  source: 'atoms',
  props: {
    text: ['Click here to open modal', 'Here is your modal title', 'Wow! You opened modal.'],
    wrapperStyle: { height: 'calc(100% - 38px)' },
    textStyle: { width: '100%', height: '100%', border: 'none' },
    style: { backgroundColor: '', color: '', border: '', text: '' },
  },
  layout: { i: null, x: 0, y: 0, w: 1.5, h: 3 },
};

export default ModalWindow;
