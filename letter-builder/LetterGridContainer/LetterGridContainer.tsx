import { addBlockLine, IGridContainers, setCurrentContainer } from "@/store/LetterBuilderStore/letterLayoutSlice";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useAppDispatch, useTypedSelector } from "@/hooks/cvTemplateHooks";
import { T_BlockElement, CustomLayout } from "@/types/landingBuilder";
import { changeElement } from "@store/LetterBuilderStore/letterLayoutSlice";
import { LetterGridContainerEmailButton } from "./LetterGridContainerEmailButton";
import { LetterGridContainerItem } from "./LetterGridContainerItem";

import classes from "./LetterGridContainer.module.scss";

type ResponsiveGridLayoutWithWidthType = React.ComponentClass<
  ReactGridLayout.ResponsiveProps & ReactGridLayout.WidthProviderProps
>;

const ResponsiveReactGridLayout = Responsive;
const ResponsiveGridLayoutWithWidth = WidthProvider(
  ResponsiveReactGridLayout,
) as ResponsiveGridLayoutWithWidthType;

export const LetterGridContainer = (container: IGridContainers) => {
  const dispatch = useAppDispatch();
  const currentDraggableItem = useTypedSelector((state) => state.layout.currentDraggableItem);

  const width = useTypedSelector((state) => state.layout.windowWidth);

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

  const handleDrop = (layoutList: Layout[], layoutItem: Layout) => {
    const draggableItem = currentDraggableItem as CustomLayout;
    if (draggableItem && draggableItem.props.isChild) return;

    dispatch(addBlockLine({ draggableItem, layoutList, layoutItem, containerId: container.id}));
  };

  const calculatedWidth = Number(width) - 76 - (Number(width) - 120) * 0.3;

  const draggableItemName = currentDraggableItem as { name: string } | null;
  const isDroppable = draggableItemName?.name === "BlockLine";

  return (
    <div
      className={classes["container"]}
      onMouseEnter={() => {
        dispatch(setCurrentContainer(container.id));
      }}
      onDragOver={(evt) => {
        evt.preventDefault();
        dispatch(setCurrentContainer(container.id));
      }}
    >
      <LetterGridContainerEmailButton
        container={container}
        workspaceLayout={workspaceLayout}
        width={width}
      />

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
          rowHeight={50}
          width={calculatedWidth}
          margin={[0, -1]}
          isDroppable={isDroppable}
          isResizable={false}
          onDrop={handleDrop}
          draggableHandle=".drag-area"
          onResizeStop={handleChangeLayout}
          onDragStop={handleChangeLayout}
        >
          {container.elements.activeElements.map((element) => (
            <LetterGridContainerItem
              key={element.layout.i}
              containerID={container.id}
              element={element}
            />
          ))}
        </ResponsiveGridLayoutWithWidth>
    </div>
  );
};
