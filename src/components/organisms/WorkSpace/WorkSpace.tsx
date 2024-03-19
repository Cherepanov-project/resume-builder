import { lazy, Suspense, useEffect, useState } from 'react';
import ResponsiveGridLayout, { Layout } from 'react-grid-layout';

import {
  addElement,
  addGridContainer,
  changeElement,
  setContainerButtonHover,
  // deleteGridContainer,
  setCurrentContainer,
  setIsContainerHover,
} from '@store/landingBuilder/layoutSlice';
import { useAppDispatch, useAppSellector } from '@hooks/cvTemplateHooks';
import ComponentPreloader from '@components/atoms/ComponentPreloader';
import ElementToolsPanel from '@components/organisms/ElementToolsPanel';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import classes from './WorkSpace.module.scss';
import { DynamicComponentRendererProps, T_BlockElement } from '@/types/landingBuilder';
import { PlusCircleFilled, PlusCircleOutlined } from '@ant-design/icons';
import ContainerToolsPanel from '../ContainerToolsPanel';
// import DefaultButton from '@/components/atoms/DefaultButton';

// ========================================================================== \\
// Отрисовываем динамический компонент
// По сути это зависимый компонент, который отвечает за рендеринг условного блока
const DynamicComponentRenderer: React.FC<DynamicComponentRendererProps> = ({
  Component,
  props,
  columns,
  source,
  children,
  layout,
}) => {
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
};
// ========================================================================== \\

const WorkSpace: React.FC = () => {
  const dispatch = useAppDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  // const [isHover, setIsHover] = useState(false);
  const gridContainers = useAppSellector((state) => state.layout.gridContainers);
  const currentContainer = useAppSellector((state) => state.layout.currentContainer);
  const isHover = useAppSellector((state) => state.layout.isHover);
  // console.log(gridContainers);
  // const draggableItem = useAppSellector((state) => state.layout.currentDraggableItem);
  // const activeElements = useAppSellector((state) => state.layout.activeElements);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const handleDropElement = (layout: Layout[], layoutItem: Layout, index: number) => {
  //   const draggableItem = gridContainers[index].elements.currentDraggableItem;
  //   dispatch(addElement({ draggableItem, layoutItem, layout }));
  // };

  // Вытаскиваем макеты наших активных компонентов
  const activeElements: T_BlockElement[] = [];
  for (let i = 0; i < gridContainers.length; i++) {
    gridContainers[i].elements.activeElements.forEach((elem) => activeElements.push(elem));
  }
  const workspaceLayout = activeElements.reduce((acc: Layout[], el: T_BlockElement) => {
    return [...acc, el.layout];
  }, []);

  const handleChangeLayout = (layout: Layout[]) => {
    layout.map((item) => {
      dispatch(changeElement(item));
    });
  };
  console.log('all');
  return (
    <div className={classes['workspace']}>
      <div className={classes['wrapper']}>
        {gridContainers.map((container) => (
          <div
            key={container.id}
            className={classes['container']}
            onMouseEnter={() => {
              if (isHover !== container.id) {
                dispatch(setIsContainerHover(container.id));
              }
              if (container.id !== currentContainer) dispatch(setCurrentContainer(container.id));
            }}
            onMouseLeave={() => {
              if (isHover === container.id) {
                dispatch(setIsContainerHover(null));
              }
            }}
            onDragOver={(evt) => {
              evt.preventDefault();
              // console.log('onDragOver', container.id);
              if (container.id !== currentContainer) dispatch(setCurrentContainer(container.id));
            }}
          >
            <ContainerToolsPanel /*layout={container.layout}*/ />
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
                const draggableItem = container.elements.currentDraggableItem;
                const id = container.id;
                console.log('dragg', draggableItem);
                dispatch(addElement({ draggableItem, layoutItem, layout, id }));
              }}
              draggableHandle=".drag-area"
              onResizeStop={handleChangeLayout}
              onDragStop={handleChangeLayout}
            >
              {/* Динамически подгружаем компоненты и прокидывааем в них пропсы из одноимменных объектов */}
              {container.elements.activeElements.map((el) => {
                return (
                  <div key={el.layout.i} className={classes['item']}>
                    <ElementToolsPanel layout={el.layout} />
                    <DynamicComponentRenderer
                      Component={el.name}
                      source={el.source || 'atoms'}
                      props={el.props}
                      columns={el.columns || 1}
                      children={el.children}
                      layout={el.layout}
                    />
                  </div>
                );
              })}
            </ResponsiveGridLayout>
            {isHover === container.id && (
              <button
                className={classes['add-button']}
                onClick={() => dispatch(addGridContainer())}
                onMouseEnter={() => {
                  if (!container.isButtonHover) {
                    const id = container.id;
                    const isButtonHover = true;
                    dispatch(setContainerButtonHover({ id, isButtonHover }));
                  }
                }}
                onMouseLeave={() => {
                  if (container.isButtonHover) {
                    const id = container.id;
                    const isButtonHover = false;
                    dispatch(setContainerButtonHover({ id, isButtonHover }));
                  }
                }}
              >
                {!container.isButtonHover ? (
                  <PlusCircleOutlined style={{ color: '#2dc08d', fontSize: 30 }} />
                ) : (
                  <PlusCircleFilled style={{ color: '#2dc08d', fontSize: 30 }} />
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSpace;
