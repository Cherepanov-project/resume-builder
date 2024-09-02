import { useNavigate } from 'react-router-dom';
import { IGridContainers, setCurrentContainer } from '@/store/LetterBuilderStore/letterLayoutSlice';
import ResponsiveGridLayout, { Layout } from 'react-grid-layout';
import { useAppDispatch, useTypedSelector } from '@/hooks/cvTemplateHooks';
import { LetterDynamicComponentRendererProps, T_BlockElement } from '@/types/landingBuilder';
import { addElement, changeElement, setWindowWidth } from '@store/LetterBuilderStore/letterLayoutSlice';
import React, { Suspense, lazy, memo, useEffect, useState } from 'react';
import ComponentPreloader from '@/components/atoms/ComponentPreloader';
import ElementToolsPanel from '../ElementToolsPanel';

import classes from './LetterGridContainer.module.scss';

// ========================================================================== \\
// Отрисовываем динамический компонент
// По сути это зависимый компонент, который отвечает за рендеринг условного блока
  const DynamicComponentRenderer: React.FC<LetterDynamicComponentRendererProps> = memo(
  //const DynamicComponentRenderer: React.FC<DynamicComponentRendererProps> = 
  ({id, Component, props, columns, source, children, layout, containerId }) => {
    const DynamicComponent = lazy(() => import(`../../${source}/LineBlocks/index.ts`));

    return (
      <Suspense fallback={<ComponentPreloader />}>
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
      </Suspense>
    );
  },
)
// ========================================================================== \\


export const LetterGridContainer = (container: IGridContainers) => {
  const dispatch = useAppDispatch();
  const currentDraggableItem = useTypedSelector((state) => state.layout.currentDraggableItem);
  const navigate = useNavigate();
  
  const width = useTypedSelector((state) => state.layout.windowWidth);
  const [isHover, setIsHover] = useState(false);
  const [isDraggingInnerItem, setIsDraggingInnerItem] = useState(false);

  const handleSetDraggingInnerItem = (isDragging: boolean) => {
    setIsDraggingInnerItem(isDragging);
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const workspaceLayout = container.elements.activeElements.reduce(
    (acc: Layout[], el: T_BlockElement) => {
      return [...acc, el.layout];
    },
    [],
  );

  const handleChangeLayout = (layout: Layout[]) => {
    layout.map((item) => {
      dispatch(changeElement(item));
    });
  };

  const handleEmailClick = () => {
    navigate('/email');
  };

  return (
    <div
      className={classes['container']}
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
      <ResponsiveGridLayout
        className={classes['grid']}
        layout={workspaceLayout}
        cols={1}
        rowHeight={container.height}
        width={width - 76 - (width - 120) * 0.3}
        margin={[8, 8]}
        resizeHandles={['sw', 'se']}
        isDraggable={!isDraggingInnerItem}
        isDroppable
        onDrop={(layout: Layout[], layoutItem: Layout) => {
          const draggableItem = currentDraggableItem;
          
          if (draggableItem) {
            if (draggableItem.props.isChild) return;
          }

          const id = container.id;

          const newLayoutItem = {
            ...layoutItem,
            w: layoutItem.w || 1,
            h: layoutItem.h || 1, 
            x: layoutItem.x || 0, 
            y: layoutItem.y || 0, 
          };

          dispatch(addElement({ draggableItem, layoutItem: newLayoutItem, layout, id }));
        }}
        draggableHandle=".drag-area"
        onResizeStop={handleChangeLayout} 
        onDragStop={handleChangeLayout}
      > 
        {/* Динамически подгружаем компоненты и прокидывааем в них пропсы из одноимменных объектов */}
        {container.elements.activeElements.map((el) => {
          return (
          <div key={el.layout.i} className={classes['item']} >
            <ElementToolsPanel layout={el.layout} id={container.id} setDraggingInnerItem={handleSetDraggingInnerItem} elClass='drag-area'/>
            <DynamicComponentRenderer
              id={el.id}
              Component={el.name}
              source={el.source || 'atoms'}
              props={el.props}
              columns={el.columns || 1}
              layout={el.layout}
              children={el.children}
              containerId={container.id}
            />
          </div>
        )})}
      </ResponsiveGridLayout>

      <button onClick={handleEmailClick}>email</button>
    </div>
  );
};