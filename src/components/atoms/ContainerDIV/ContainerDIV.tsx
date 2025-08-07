import { lazy, Suspense, useRef, useEffect, useState, ComponentType } from "react";
import ReactGridLayout, {
  WidthProvider,
  Responsive as ResponsiveGridLayout,
  Layout,
} from "react-grid-layout";

import { addElement } from "@/store/landingBuilder/layoutSlice";
import { useAppDispatch, useTypedSelector } from "@hooks/cvTemplateHooks";
import ComponentPreloader from "@components/atoms/ComponentPreloader";
import {
  ContainerDIVProps,
  DynamicComponentRendererProps,
  T_BlockElement,
} from "@/types/landingBuilder";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./ContainerDIV.module.scss";
import { nanoid } from "nanoid";
import ElementToolsPanel from "@/components/organisms/ElementToolsPanel/ElementToolsPanel";

const ResponsiveGridLayoutWithWidth = WidthProvider(ResponsiveGridLayout) as React.ComponentType<
  ReactGridLayout.ResponsiveProps & ReactGridLayout.WidthProviderProps
>;

const DynamicComponentRenderer: React.FC<DynamicComponentRendererProps> = ({
  Component,
  props,
  source,
  children,
  layout,
  containerId,
}) => {
  if (!Component) {
    return <div style={{ padding: 10, color: "#888" }}></div>;
  }
  let DynamicComponent: ComponentType<DynamicComponentRendererProps> = () => <></>;
  try {
    if (source === "organisms") {
      DynamicComponent = lazy(() => import(`@organisms/${Component}/index.ts`));
    } else if (source === "molecules") {
      DynamicComponent = lazy(() => import(`@molecules/${Component}/index.ts`));
    } else if (source === "atoms") {
      DynamicComponent = lazy(() => import(`@atoms/${Component}/index.ts`));
    } else {
      return <div style={{ padding: 10, color: "red" }}>unknown source: {source}</div>;
    }
  } catch (error) {
    console.error("Dynamic import error:", error);
    return <div style={{ padding: 10, color: "red" }}>Error while importing component</div>;
  }

  return (
    <Suspense fallback={<ComponentPreloader />}>
      <DynamicComponent
        key={Component}
        props={props}
        source={source}
        children={children}
        layout={layout}
        containerId={containerId}
      />
    </Suspense>
  );
};

const ContainerDIV: React.FC<ContainerDIVProps> = ({
  children,
  layout,
  columns = 1,
  props,
  containerId,
}) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const draggableItem = useTypedSelector((state) => state.layout.currentDraggableItem);

  useEffect(() => {
    const containerWidth = (containerRef.current! as HTMLElement).getBoundingClientRect().width;
    setWidth(containerWidth);

    const handleResize = () => {
      setWidth(containerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [layout.w]);

  const handleDropElement = (_layout: Layout[], layoutItem: Layout, event: Event) => {
    const targetElement = event.target as HTMLElement;
    const parentElement = targetElement.closest(".wrapper") as HTMLElement;
    const element = parentElement?.dataset.id;
    dispatch(
      addElement({
        draggableItem,
        layoutItem,
        element,
        el: children.find((el) => el.layout.i === element),
      }),
    );
  };

  const workspaceLayout = children?.reduce((acc: Layout[], el: T_BlockElement) => {
    return [...acc, el.layout];
  }, []);

  let style;
  try {
    style = props.style;
  } catch {
    style = {
      backgroundColor: "white",
      height: "auto",
    };
  }

  const [isDraggingInnerItem, setIsDraggingInnerItem] = useState(false);

  const handleSetDraggingInnerItem = (isDragging: boolean) => {
    setIsDraggingInnerItem(isDragging);
  };

  return (
    <div ref={containerRef} className={classes["wrapper"]} data-id={layout.i} style={style}>
      <ResponsiveGridLayoutWithWidth
        layouts={{
          lg: workspaceLayout,
          md: workspaceLayout,
          sm: workspaceLayout,
          xs: workspaceLayout,
          xxs: workspaceLayout,
        }}
        cols={{ lg: columns, md: columns, sm: columns, xs: columns, xxs: columns }}
        width={width}
        rowHeight={30}
        margin={[10, 0]}
        isDraggable={!isDraggingInnerItem}
        isDroppable
        compactType={null}
        preventCollision={true}
        onDrop={handleDropElement}
        draggableHandle=".drag-area1"
      >
        {children &&
          children.map((el, indx) => {
            return (
              <div className={classes["item"]} key={workspaceLayout[indx].i || nanoid()}>
                {false && (
                  <ElementToolsPanel
                    layout={el.layout}
                    parentLayout={layout}
                    id={containerId}
                    elementId={el.layout.i}
                    setDraggingInnerItem={handleSetDraggingInnerItem}
                    elClass="drag-area1"
                  />
                )}
                <DynamicComponentRenderer
                  Component={el.name}
                  props={el.props}
                  source={el.source}
                  children={el.children}
                  layout={el.layout}
                />
              </div>
            );
          })}
      </ResponsiveGridLayoutWithWidth>
    </div>
  );
};

export default ContainerDIV;
