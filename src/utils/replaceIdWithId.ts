import { nanoid } from "nanoid";
import { T_BlockElement } from "@/types/landingBuilder";

export const replaceIdWithNanoid = (element: T_BlockElement): T_BlockElement => {
  const newElement: T_BlockElement = {
    ...element,
    layout: {
      ...element.layout,
      i: nanoid(),
    },
    id: nanoid(),
  };

  if (element.children && Array.isArray(element.children)) {
    newElement.children = element.children.map(child => 
      replaceIdWithNanoid(child)
    );
  }

  return newElement;
};