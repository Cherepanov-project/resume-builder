import { FC, memo } from "react";
import { T_BlockElement } from "../../../src/types/landingBuilder";
import { nanoid } from "nanoid";
import DynamicChildComponentRenderer from "./DynamicChildComponentRenderer";

export interface BlockLineCellElementsProps {
  children?: T_BlockElement[];
}

export const BlockLineCellContent: FC<BlockLineCellElementsProps> = memo(({ children }) => {
  if (!children) return "блок";

  return children
    .filter(Boolean)
    .map((child) => (
      <DynamicChildComponentRenderer
        key={nanoid()}
        Component={child.name}
        id={child.id as string}
      />
    ));
});
