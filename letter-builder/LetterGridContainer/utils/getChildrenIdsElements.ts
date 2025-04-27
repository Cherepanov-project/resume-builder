import { T_BlockElement } from "@/types/landingBuilder";

export const getChildrenIdsElements = (element: T_BlockElement) => {
    return (element.children || []).reduce((acc: string[], item) => {
      if (!item || !item.children) return acc;
  
      for (const child of item.children) {
        if (child?.id) {
          acc.push(child.id);
        }
      }
      return acc;
    }, [] as string[]);
  };
  