/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, lazy, useState } from 'react';
import { WidthProvider, Responsive, Layout } from 'react-grid-layout';
// import _ from "lodash";

import ItemHeader from '@molecules/ElementToolsPanel';

import classes from './ComponentB.module.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface Item {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW: number;
  maxW: number;
  minH: number;
  maxH: number;
  static: boolean;
  isResizable: boolean;
  component: React.ComponentType<any>;
}

interface WorkSpaceProps {
  className?: string;
  cols?: { lg: number; md: number; sm: number; xs: number; xxs: number };
  rowHeight?: number;
}

interface DynamicComponentRendererProps {
  components: React.ComponentType<any>[];
}

const DynamicComponentRenderer: React.FC<DynamicComponentRendererProps> = ({ components }) => {
  return (
    <>
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </>
  );
};

const ComponentA: React.FC<WorkSpaceProps> = (props) => {
  const importAll = (r: Record<string, any>) => {
    return Object.keys(r).map((key) => key.replace(/^.+\/([^/]+)\/([^/]+)\.tsx$/, '$1'));
  };

  const componentsContext = import.meta.glob('../../atoms/*/*.tsx');
  const componentNames = importAll(componentsContext);

  const componentsArray = componentNames.map((componentName) => {
    return lazy(() => import(`../../atoms/${componentName}`));
  });

  const [state, setState] = useState<WorkSpaceState>({
    items: [],
    newCounter: 0,
  });

  const onAddItem = (component: React.ComponentType<any>) => {
    console.log('adding item', state.newCounter);

    let initialWidth = 2;
    let initialHeight = 2;

    if (component === componentsArray[8]) {
      initialWidth = 4;
    } else if (component === componentsArray[9]) {
      initialWidth = 4;
      initialHeight = 6;
    } else if (component === componentsArray[10]) {
      initialWidth = 12;
    }

    setState((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          i: prev.newCounter.toString(),
          x: (prev.items.length * 2) % (prev.cols || 12),
          y: Infinity,
          w: initialWidth,
          h: initialHeight,
          minW: 2,
          maxW: Infinity,
          minH: 2,
          maxH: Infinity,
          static: false,
          isResizable: true,
          component,
        },
      ],
      newCounter: prev.newCounter + 1,
    }));
  };

  const onBreakpointChange = (breakpoint: string, cols: number) => {
    setState((prev) => ({
      ...prev,
      breakpoint,
      cols,
    }));
  };

  const onLayoutChange = (layout: any, layouts: any) => {
    setState((prev) => ({
      ...prev,
      layout,
      layouts,
    }));
  };

  const onRemoveItem = (i: string) => {
    console.log('removing', i);
    setState((prev) => ({
      ...prev,
      items: _.reject(prev.items, { i }),
    }));
  };

  const createElement = (el: Item) => {
    return (
      <div className={classes.itemContainer} key={el.i} data-grid={el}>
        <ItemHeader
          onDragStart={() => handleDragStart()}
          onDragStop={() => handleDragStop()}
          onAddItem={() => onAddItem(el.component)}
          onRemoveItem={() => onRemoveItem(el.i)}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicComponentRenderer components={[el.component]} />
        </Suspense>
      </div>
    );
  };

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  const onDrop = (layout: any, layoutItem: any, _event: any) => {
    console.log(layout, layoutItem, _event);

    onAddItem(componentsArray[8]);
  };

  return (
    <div className={classes.workspace}>
      <ResponsiveReactGridLayout
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        isDraggable={isDragging}
        rowHeight={100}
        isDroppable={true}
        onDrop={onDrop}
        {...props}
      >
        {state.items.map((el) => createElement(el))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default ComponentA;

interface WorkSpaceState {
  items: Item[];
  newCounter: number;
  breakpoint?: string;
  cols?: number;
  layout?: Layout[];
  layouts?: object;
}
