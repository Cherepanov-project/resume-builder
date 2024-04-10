import { IGridContainers, setCurrentContainer } from '@/store/landingBuilder/layoutSlice';
import ResponsiveGridLayout, { Layout } from 'react-grid-layout';
import ContainerToolsPanel from '../ContainerToolsPanel';
import { useAppDispatch, useAppSellector } from '@/hooks/cvTemplateHooks';
import { DynamicComponentRendererProps, T_BlockElement } from '@/types/landingBuilder';
import { addElement, addGridContainer, changeElement } from '@store/landingBuilder/layoutSlice';
import React, { Suspense, lazy, memo, useEffect, useState } from 'react';
import ComponentPreloader from '@/components/atoms/ComponentPreloader';
import ElementToolsPanel from '../ElementToolsPanel';
import { PlusCircleFilled, PlusCircleOutlined } from '@ant-design/icons';

import classes from './GridContainer.module.scss';

// ========================================================================== \\
// Отрисовываем динамический компонент
// По сути это зависимый компонент, который отвечает за рендеринг условного блока
const DynamicComponentRenderer: React.FC<DynamicComponentRendererProps> = memo(
  ({ Component, props, columns, source, children, layout }) => {
    const DynamicComponent = lazy(() => import(`../../${source}/${Component}/index.ts`));
    return (
      <Suspense fallback={<ComponentPreloader />}>
        <DynamicComponent
          key={Component}
          props={props}
          columns={columns}
          source={source}
          children={children}
          layout={layout}
        />
      </Suspense>
    );
  },
);
// ========================================================================== \\

export const GridContainer = (container: IGridContainers) => {
  const dispatch = useAppDispatch();
  const currentDraggableItem = useAppSellector((state) => state.layout.currentDraggableItem);
  const [width, setWidth] = useState(window.innerWidth);
  const [isHover, setIsHover] = useState(false);
  const [isButtonHover, setIsButtonHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          // dispatch(setCurrentContainer(''));
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
      <ContainerToolsPanel id={container.id} />
      <ResponsiveGridLayout
        className={classes['grid']}
        layout={workspaceLayout}
        cols={6}
        rowHeight={container.height}
        // 76 пикселей зарезервировано под сайдбар + отступ слева.
        width={width - 76 - (width - 120) * 0.3}
        margin={[8, 8]}
        resizeHandles={['sw', 'se']}
        isDraggable
        isDroppable
        onDrop={(layout: Layout[], layoutItem: Layout) => {
          const draggableItem = currentDraggableItem;
          const id = container.id;
          dispatch(addElement({ draggableItem, layoutItem, layout, id }));
        }}
        draggableHandle=".drag-area"
        onResizeStop={handleChangeLayout}
        onDragStop={handleChangeLayout}
      >
        {/* Динамически подгружаем компоненты и прокидывааем в них пропсы из одноимменных объектов */}
        {container.elements.activeElements.map((el) => (
          <div key={el.layout.i} className={classes['item']}>
            {/* {console.log(el)} */}
            <ElementToolsPanel layout={el.layout} id={container.id} />
            <DynamicComponentRenderer
              Component={el.name}
              source={el.source || 'atoms'}
              props={el.props}
              columns={el.columns || 1}
              layout={el.layout}
              children={el.children}
            />
            {/* Если есть дочерние элементы, отображаем их */}
            {/* {el.children &&
              el.children.map((childEl) => (
                <div key={childEl.layout.i} className={classes['item']}>
                  { {console.log(childEl)} }
                  { <ElementToolsPanel layout={childEl.layout} id={container.id} /> }
                  <DynamicComponentRenderer
                    Component={childEl.name}
                    source={childEl.source || 'atoms'}
                    props={childEl.props}
                    columns={childEl.columns || 1}
                    layout={childEl.layout}
                  />
                </div>
              ))} */}
          </div>
        ))}
      </ResponsiveGridLayout>
      {isHover && (
        <button
          className={classes['add-button']}
          onClick={() => dispatch(addGridContainer(container.id))}
          onMouseEnter={() => {
            if (!isButtonHover) {
              setIsButtonHover(true);
            }
          }}
          onMouseLeave={() => {
            if (isButtonHover) {
              setIsButtonHover(false);
            }
          }}
        >
          {!isButtonHover ? (
            <PlusCircleOutlined style={{ color: '#2dc08d', fontSize: 30 }} />
          ) : (
            <PlusCircleFilled style={{ color: '#2dc08d', fontSize: 30 }} />
          )}
        </button>
      )}
    </div>
  );
};
