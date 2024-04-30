import Tooltip from "./Tooltip";
import { nanoid } from "nanoid";

export const props = {
  name: 'Tooltip',
  type: 'Interactive',
  // name: 'BasicTooltip',
  // type: 'Simple Blocks',
  columns: 2,
  source: 'atoms',
  props: {
    style: {
      backgroundColor: 'white',
    },
  },
  children: [],
  layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 2 },
};

export default Tooltip;
