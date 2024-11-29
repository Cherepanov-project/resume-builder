import { IGridContainers, setCurrentContainer } from "@/store/LetterBuilderStore/letterLayoutSlice";
import ResponsiveGridLayout, { Layout } from "react-grid-layout";
import { useAppDispatch, useTypedSelector } from "@/hooks/cvTemplateHooks";
import { LetterDynamicComponentRendererProps, T_BlockElement } from "@/types/landingBuilder";
import {
  addElement,
  changeElement,
  setWindowWidth,
} from "@store/LetterBuilderStore/letterLayoutSlice";
import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import ComponentPreloader from "@/components/atoms/ComponentPreloader";
import ElementToolsPanel from "../organismis/ElementToolsPanel/ElementToolsPanel";
import { useNavigate } from "react-router-dom";
import classes from "./LetterGridContainer.module.scss";

// Отрисовываем динамический компонент
const DynamicComponentRenderer: React.FC<LetterDynamicComponentRendererProps> = memo(
  ({ id, Component, props, columns, source, children, layout, containerId }) => {
    const DynamicComponent = lazy(() => import(`../${source}/LineBlocks/index.ts`));

    return (
      <Suspense fallback={<ComponentPreloader />}>
        <div style={{ zIndex: 1, position: "relative" }}>
          <DynamicComponent
            id={id}
            key={Component}
            props={props}
            columns={columns}
            source={source}
            children={children}
            layout={layout}
            containerId={containerId}
          />
        </div>
      </Suspense>
    );
  },
);

export const LetterGridContainer = (container: IGridContainers) => {
  const dispatch = useAppDispatch();
  const currentDraggableItem = useTypedSelector((state) => state.layout.currentDraggableItem);
  const width = useTypedSelector((state) => state.layout.windowWidth);
  const [isHover, setIsHover] = useState(false);
  const [isDraggingInnerItem, setIsDraggingInnerItem] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSetDraggingInnerItem = (isDragging: boolean) => {
    setIsDraggingInnerItem(isDragging);
  };

  const handleElementClick = (id: string) => {
    setActiveElement(id);
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const workspaceLayout = container.elements.activeElements.reduce(
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

  const handleEmailButtonClick = () => {
    // Сохранение данных о расположении блоков
    const layoutData = container.elements.activeElements.map((el) => ({
      id: el.id,
      layout: el.layout,
    }));
    const layoutString = JSON.stringify(layoutData);

    // Создание HTML-шаблона
    const htmlTemplate = `
      <div class="${classes["container"]}">
        <ResponsiveGridLayout
          class="${classes["grid"]}"
          layout="${JSON.stringify(workspaceLayout)}"
          cols="1"
          rowHeight="${container.height}"
          width="${width - 76 - (width - 120) * 0.3}"
          margin="[8, 8]"
          isDraggable="false"
          isDroppable="false"
          isResizable="false"
        >
          ${container.elements.activeElements
            .map(
              (el) => `
            <div
              key="${el.layout.i}"
              class="${classes["item"]}"
            >
              <DynamicComponentRenderer
                id="${el.id}"
                Component="${el.name}"
                source="${el.source || "atoms"}"
                props="${JSON.stringify(el.props)}"
                columns="${el.columns || 1}"
                layout="${JSON.stringify(el.layout)}"
                children="${JSON.stringify(el.children)}"
                containerId="${container.id}"
              />
            </div>
          `,
            )
            .join("")}
        </ResponsiveGridLayout>
      </div>
    `;

    // Переход на страницу email
    navigate("/email", {
      state: {
        layoutData: layoutString,
        htmlTemplate: htmlTemplate,
      },
    });
  };

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
      <button
        style={{ color: "#ffff", marginLeft: "10px" }}
        className={classes["email-button"]}
        onClick={handleEmailButtonClick}
      >
        Email Us
      </button>

      <ResponsiveGridLayout
        className={classes["grid"]}
        layout={workspaceLayout}
        cols={1}
        rowHeight={container.height}
        width={width - 76 - (width - 120) * 0.3}
        margin={[8, 8]}
        isDraggable={!isDraggingInnerItem}
        isDroppable
        isResizable={false}
        onDrop={(layout: Layout[], layoutItem: Layout) => {
          const draggableItem = currentDraggableItem;

          if (draggableItem && draggableItem.props.isChild) return;

          const id = container.id;

          const newLayoutItem = {
            ...layoutItem,
            w: layoutItem.w || 0,
            h: layoutItem.h || 0,
            x: layoutItem.x || 0,
            y: layoutItem.y || 0,
          };
          console.log("Добавленный элемент:", {
            draggableItem,
            layoutItem: newLayoutItem,
            layout,
            containerId: id,
          });
          dispatch(addElement({ draggableItem, layoutItem: newLayoutItem, layout, id }));
        }}
        draggableHandle=".drag-area"
        onResizeStop={handleChangeLayout}
        onDragStop={handleChangeLayout}
      >
        {container.elements.activeElements.map((el) => {
          const isActive = activeElement === el.id;
          return (
            <div
              key={el.layout.i}
              className={`${classes["item"]} ${isActive ? classes["active"] : ""}`}
              onClick={() => handleElementClick(el.id)}
            >
              {isActive && (
                <ElementToolsPanel
                  layout={el.layout}
                  id={container.id}
                  setDraggingInnerItem={handleSetDraggingInnerItem}
                  elClass="drag-area"
                />
              )}
              <DynamicComponentRenderer
                id={el.id}
                Component={el.name}
                source={el.source || "atoms"}
                props={el.props}
                columns={el.columns || 1}
                layout={el.layout}
                children={el.children}
                containerId={container.id}
              />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
};
