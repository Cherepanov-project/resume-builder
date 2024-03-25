import BasicRating from "./BasicRating";
import { nanoid } from "nanoid";

console.log(nanoid())

export const props = {
  name: 'BasicRating',
  type: 'Simple Blocks',
  columns: 2,
  source: 'atoms',
  props: {},
  children: [],
  layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
};

export default BasicRating;
