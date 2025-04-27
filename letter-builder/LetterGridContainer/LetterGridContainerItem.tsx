import { CSSProperties, forwardRef, memo, useEffect, useRef, useState } from "react";
import ElementToolsPanel from "../organismis/ElementToolsPanel/ElementToolsPanel";
import { T_BlockElement } from "../../src/types/landingBuilder";
import { getChildrenIdsElements } from "./utils/getChildrenIdsElements";
import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { changeElement } from "@store/LetterBuilderStore/letterLayoutSlice";

import classes from "./LetterGridContainer.module.scss";
import BlockLine from "../atoms/LineBlocks/index";
export interface LetterGridContainerRequirements {
  className?: string;
  style?: CSSProperties;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onTouchEnd?: () => void;
}

export interface LetterGridContainerItemProps extends LetterGridContainerRequirements {
  element: T_BlockElement;
  containerID: string;
}

export const LetterGridContainerItem = memo(
  forwardRef<HTMLDivElement, LetterGridContainerItemProps>((props, ref) => {
    const { element: el, containerID, className, style } = props;
    const { onMouseDown, onMouseUp, onTouchEnd } = props;

    const dispatch = useAppDispatch();

    const idsElements = getChildrenIdsElements(el);
    const elementClasses = `${className} ${classes["item"]}`;

    const measureRef = useRef<HTMLDivElement | null>(null);

    const [isCurrentItem, setIsCurrentItem] = useState(false);

    const leaveCount = useRef(0);
    const changeCurrentCell = (over: boolean) => {
      leaveCount.current += over ? -1 : 1;

      if ((!over && leaveCount.current < 0) || leaveCount.current <= -2) return;
      setIsCurrentItem(over);
    };

    const handleDragEnter = () => changeCurrentCell(true);
    const handleDragLeave = () => changeCurrentCell(false);

    useEffect(() => {
      if (!measureRef.current) return;

      const resizeObserver = new ResizeObserver(() => {
        if (!measureRef.current) return;
        if (measureRef.current.innerText.includes("Loading")) return;
        const height = measureRef.current.getBoundingClientRect().height;

        const h = height / 50; // rowHeight

        if (h === el.layout.h) return;
        dispatch(changeElement({ ...el.layout, h }));
      });

      resizeObserver.observe(measureRef.current);

      return () => resizeObserver.disconnect();
    }, [measureRef, el.layout, dispatch]);

    return (
      <div
        ref={ref}
        key={el.layout.i}
        style={{ ...style, zIndex: isCurrentItem ? 10 : undefined }}
        className={elementClasses}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        onDrop={handleDragLeave}
        onDragEnterCapture={handleDragEnter}
        onDragLeaveCapture={handleDragLeave}
      >
        <div className={classes["element-tool-visibility"]}>
          <ElementToolsPanel
            layout={el.layout}
            id={containerID}
            elementsIds={idsElements}
            setDraggingInnerItem={() => {}}
            elClass="drag-area"
          />
        </div>
        <div ref={measureRef}>
          <BlockLine
            id={el.id as string}
            widths={(el.props as unknown as { blockWidth: string[] }).blockWidth }
            children={el.children}
          />
        </div>
      </div>
    );
  }),
);
