import { FC, memo } from "react";
import { T_BlockElement } from "../../../src/types//landingBuilder";
import { BlockLineCell } from "./BlockLineCell";

export interface BlockLineCellListProps {
  id: string;
  children?: T_BlockElement[];
  widths: string[];
}

export const BlockLineCellList: FC<BlockLineCellListProps> = memo((props) => {
  const { id, children, widths } = props;

  if (!children || !Array.isArray(widths)) return [null];

  return widths.map((width, index) => {
    const cellChildren = children[index]?.children;

    return (
      <BlockLineCell
        key={`${id}-${index}`}
        id={id}
        index={index}
        width={width}
        cellChildren={cellChildren}
      />
    );
  });
});
