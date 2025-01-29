import RatingSystem from "./RatingSystem";
import { nanoid } from "nanoid";

export const props = {
  name: 'RatingSystem',
  type: 'Interactive',
  // name: 'BasicRating',
  // type: 'Simple Blocks',
  columns: 2,
  source: 'atoms',
  props: {},
  children: [],
  layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 2 },
};

export default RatingSystem;
