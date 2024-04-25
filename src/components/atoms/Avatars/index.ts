import { nanoid } from 'nanoid';
import Avatars from './Avatars';

export const props = {
  name: 'Avatars',
  type: 'Images',
  columns: 1,
  source: 'atoms',
  props: {
    url: '',
  },
  children: [],
  layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 7 },
};

export default Avatars;
