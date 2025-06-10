import React, { memo, FC, useRef } from "react";
import { TableCell } from "@mui/material";
import { useAppDispatch } from "../../hooks/cvTemplateHooks";
import { useCurrentDraggableItem } from "./hooks/useCurrentDraggableItem";
import { addChildElement } from "../../../src/store/LetterBuilderStore/letterLayoutSlice";
import { BlockLineCellContent } from "./BlockLineCellContent";
import { T_BlockElement } from "@/types/landingBuilder";

import classes from "./BlockLine.module.scss";

export interface BlockLineCellProps {
  id: string;
  index: number;
  width: string;
  cellChildren: T_BlockElement[] | undefined;
}

export const BlockLineCell: FC<BlockLineCellProps> = memo((props) => {
  const { id, index,  width, cellChildren } = props;

  const currentDraggableItem = useCurrentDraggableItem();
  const dispatch = useAppDispatch();

  const cellRef = useRef<HTMLTableCellElement | null>(null);
  const leaveCount = useRef(0);

  const changeCurrentCell = (over: boolean) => {
    if (!currentDraggableItem || !cellRef.current) return;

    // При движении мыши по компоненту поочередно срабатывают DragEnter и DragLeave,
    // но когда мышь попадает на компонент и покидает его срабатывают по два раза.
    leaveCount.current += over ? -1 : 1;

    if ((!over && leaveCount.current < 0) || leaveCount.current <= -2) return;

    cellRef.current.classList.toggle(classes["cell--drag-over"], over);
    cellRef.current.style.borderColor = over ? "#4cb9ea" : "";
    cellRef.current.style.zIndex = over ? "20" : "";
  };

  const handleDragLeave = () => changeCurrentCell(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    changeCurrentCell(true);
  };

  const handleDrop = () => {
    if (currentDraggableItem) {
      dispatch(
        addChildElement({
          draggableItem: currentDraggableItem,
          idParentElement: id,
          indexChild: index,
        }),
      );
    }

    changeCurrentCell(false);
  };

  return (
    <TableCell
      className={classes.cell}
      ref={cellRef}
      variant="letterBlockCell"
      sx={{
        width: width,
        color: cellChildren ? "black" : undefined,
      }}
      onDrop={handleDrop}
      onDragEnterCapture={handleDragOver}
      onDragLeaveCapture={handleDragLeave}
    >
      <BlockLineCellContent children={cellChildren} />
    </TableCell>
  );
});
