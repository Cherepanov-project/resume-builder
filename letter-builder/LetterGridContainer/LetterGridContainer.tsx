import { IGridContainers, setCurrentContainer } from "@/store/LetterBuilderStore/letterLayoutSlice";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useAppDispatch, useTypedSelector } from "@/hooks/cvTemplateHooks";
import {
  DynamicComponentRendererProps,
  T_BlockElement,
  CustomLayout,
} from "@/types/landingBuilder";
import { addElement, changeElement, setWindowWidth } from "@/store/landingBuilder/layoutSlice";
import React, { memo, useEffect, useState } from "react";
import ElementToolsPanel from "../organismis/ElementToolsPanel/ElementToolsPanel";
import classes from "./LetterGridContainer.module.scss";
import { setSelectedGif } from "@/store/LetterBuilderStore/gifSelectionSlice";
import { setSelectedSticker } from "@/store/LetterBuilderStore/stickerSelectionSlice";
import { setContainer } from "@/store/landingBuilder/containerElementSlice";
import DynamicComponent from "../atoms/LineBlocks";
import { setContainer } from "@/store/landingBuilder/containerElementSlice";

const ResponsiveReactGridLayout = Responsive;
const ResponsiveGridLayoutWithWidth = WidthProvider(ResponsiveReactGridLayout);

export type LetterDynamicComponentRendererProps = DynamicComponentRendererProps;

const DynamicComponentRenderer: React.FC<LetterDynamicComponentRendererProps> = memo(
  ({
    id,
    Component,
    props,
    columns,
    source,
    children,
    layout,
    containerId,
    onGifSelect,
    selectedGif,
    onStickerSelect,
    selectedSticker,
  }) => {

    if (!id || !props) return;

    const enhancedProps = {
      ...props,
      blockWidth: Array.isArray(props.blockWidth)
        ? props.blockWidth.filter((item) => typeof item === "string")
        : ["100%"],
    };

    return (
      <div style={{ position: "relative" }}>
        <DynamicComponent
          icon={<div />}
          draggable={true}
          blockWidth={enhancedProps.blockWidth}
          onDragStart={() => {}}
          id={id}
          key={Component}
          props={enhancedProps}
          columns={columns}
          source={source}
          children={children}
          layout={layout}
          containerId={containerId}
          onGifSelect={onGifSelect}
          selectedGif={selectedGif}
          onStickerSelect={onStickerSelect}
          selectedSticker={selectedSticker}
        />
      </div>
    );
  },
);

export const LetterGridContainer = (container: IGridContainers) => {
  const dispatch = useAppDispatch();
  const currentDraggableItem = useTypedSelector((state) => state.layout.currentDraggableItem);
  const width = useTypedSelector((state) => state.layout.windowWidth);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isDraggingInnerItem, setIsDraggingInnerItem] = useState<boolean>(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const gridContainers = useTypedSelector((state) => state.layout.gridContainers);
  const selectedGifs = useTypedSelector((state) => state.gifSelection.selectedGifs) || {};
  const selectedStickers =
    useTypedSelector((state) => state.stickerSelection.selectedStickers) || {};

  const handleSetDraggingInnerItem = (isDragging: boolean) => {
    setIsDraggingInnerItem(isDragging);
  };

  const handleElementClick = (id: string) => {
    setActiveElement(id);
  };

  useEffect(() => {
    dispatch(setContainer(container));
  }, [container]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const workspaceLayout = gridContainers[0]?.elements.activeElements.reduce(
    (acc: Layout[], el: T_BlockElement) => {
      return [...acc, el.layout];
    },
    [],
  );

  const handleChangeLayout = (layout: Layout[]) => {
    layout.forEach((item) => {
      dispatch(changeElement(item));
    });
  };

  const calculatedWidth = Number(width) - 76 - (Number(width) - 120) * 0.3;

  return (
    <div
      className={classes["container"]}
      onMouseEnter={() => {
        if (!isHover) {
          setIsHover(true);
          dispatch(setCurrentContainer(container.id));
        }
      }}
      onMouseLeave={() => {
        if (isHover) {
          setIsHover(false);
        }
      }}
      onDragOver={(evt) => {
        evt.preventDefault();
        if (!isHover) {
          setIsHover(true);
          dispatch(setCurrentContainer(container.id));
        }
      }}
    >
      <ResponsiveGridLayoutWithWidth
        className={classes["grid"]}
        layouts={{
          lg: workspaceLayout,
          md: workspaceLayout,
          sm: workspaceLayout,
          xs: workspaceLayout,
        }}
        cols={{ lg: 1, md: 1, sm: 1, xs: 1 }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
        rowHeight={container.height}
        width={calculatedWidth}
        margin={[8, 8]}
        isDraggable={!isDraggingInnerItem}
        isDroppable={true}
        isResizable={false}
        compactType={null}
        preventCollision={true}
        onDrop={(layout: Layout[], layoutItem: Layout) => {
          const draggableItem = currentDraggableItem as CustomLayout;

          if (draggableItem && draggableItem.props.isChild) return;

          const id = container.id;

          const newLayoutItem = {
            ...layoutItem,
            w: layoutItem.w || 0,
            h: layoutItem.h || 0,
            x: layoutItem.x || 0,
            y: layoutItem.y || 0,
          };

          dispatch(addElement({ draggableItem, layoutItem: newLayoutItem, layout, id }));
        }}
        draggableHandle=".drag-area"
        onResizeStop={handleChangeLayout}
        onDragStop={handleChangeLayout}
      >
        {container.elements.activeElements.map((el) => {
          const isActive = activeElement === el.id;
          const idsElements = (el.children || []).reduce((acc: string[], item) => {
            if (!item || !item.children) return acc;

            for (const child of item.children) {
              if (child?.id) {
                acc.push(child.id);
              }
            }
            return acc;
          }, [] as string[]);

          let gifComponentId = null;
          let stickerComponentId = null;
          if (
            el.children &&
            el.children.length > 0 &&
            el.children[0].children &&
            el.children[0].children.length > 0
          ) {
            const potentialGifComponent = el.children[0].children[0];

            if (
              potentialGifComponent.name === "Gifs" ||
              potentialGifComponent.name === "GifsComponent"
            ) {
              gifComponentId = potentialGifComponent.id;
            } else {
              for (const cell of el.children) {
                if (cell.children) {
                  for (const grandChild of cell.children) {
                    if (
                      (grandChild.name === "Gifs" || grandChild.name === "GifsComponent") &&
                      grandChild.id
                    ) {
                      gifComponentId = grandChild.id;
                      break;
                    }
                  }
                  if (gifComponentId) break;
                }
              }
            }
          }
          if (
            el.children &&
            el.children.length > 0 &&
            el.children[0].children &&
            el.children[0].children.length > 0
          ) {
            const potentialStickerComponent = el.children[0].children[0];

            if (
              potentialStickerComponent.name === "Stickers" ||
              potentialStickerComponent.name === "StickersComponent"
            ) {
              stickerComponentId = potentialStickerComponent.id;
            } else {
              for (const cell of el.children) {
                if (cell.children) {
                  for (const grandChild of cell.children) {
                    if (
                      potentialStickerComponent.name === "Stickers" ||
                      (grandChild.name === "StickersComponent" && grandChild.id)
                    ) {
                      stickerComponentId = grandChild.id;
                      break;
                    }
                  }
                  if (stickerComponentId) break;
                }
              }
            }
          }

          // Используем найденный ID компонента Gifs, если он есть, иначе fallback на ID BlockLine
          const idToUseForGif = gifComponentId || el.id;
          const idToUseForSticker = stickerComponentId || el.id;

          return (
            <div
              key={el.layout.i}
              className={`${classes["item"]} ${isActive ? classes["active"] : ""}`}
              onClick={() => {
                if (el.id) {
                  handleElementClick(el.id);
                }
              }}
            >
              {isActive && (
                <ElementToolsPanel
                  layout={el.layout}
                  id={container.id}
                  elementsIds={idsElements}
                  setDraggingInnerItem={handleSetDraggingInnerItem}
                  elClass="drag-area"
                />
              )}
              <DynamicComponentRenderer
                id={el.id}
                Component={el.name}
                source={(el.source || "atoms") as string}
                props={el.props}
                columns={el.columns || 1}
                layout={el.layout}
                children={el.children}
                containerId={container.id}
                onGifSelect={(url: string) => {
                  if (idToUseForGif) {
                    dispatch(setSelectedGif({ elementId: idToUseForGif, url }));
                  }
                }}
                selectedGif={idToUseForGif ? selectedGifs[idToUseForGif] || "" : ""}
                onStickerSelect={(url: string) => {
                  if (idToUseForSticker) {
                    dispatch(setSelectedSticker({ elementId: idToUseForSticker, url }));
                  }
                }}
                selectedSticker={idToUseForSticker ? selectedStickers[idToUseForSticker] || "" : ""}
              />
            </div>
          );
        })}
      </ResponsiveGridLayoutWithWidth>
    </div>
  );
};
