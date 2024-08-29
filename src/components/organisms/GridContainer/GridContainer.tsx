import { useNavigate } from 'react-router-dom';
import { IGridContainers, setCurrentContainer } from '@/store/landingBuilder/layoutSlice';
import ResponsiveGridLayout, { Layout } from 'react-grid-layout';
import ContainerToolsPanel from '../ContainerToolsPanel';
import { useAppDispatch, useTypedSelector } from '@/hooks/cvTemplateHooks';
import { DynamicComponentRendererProps, T_BlockElement } from '@/types/landingBuilder';
import { addElement, addGridContainer, changeElement, setWindowWidth } from '@store/landingBuilder/layoutSlice';
import { Suspense, lazy, memo, useEffect, useState } from 'react';
import ComponentPreloader from '@/components/atoms/ComponentPreloader';
import ElementToolsPanel from '../ElementToolsPanel';
import { PlusCircleFilled, PlusCircleOutlined } from '@ant-design/icons';

import classes from './GridContainer.module.scss';

// ========================================================================== \\
// Отрисовываем динамический компонент
// По сути это зависимый компонент, который отвечает за рендеринг условного блока
const DynamicComponentRenderer: React.FC<DynamicComponentRendererProps> = memo(
  ({ Component, props, columns, source, children, layout, containerId }) => {
    const DynamicComponent = lazy(() => import(`../../${source}/LineBlocks/${Component}/index.ts`));
    return (
      <Suspense fallback={<ComponentPreloader />}>
        <DynamicComponent
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
);
// ========================================================================== \\


export const GridContainer = (container: IGridContainers) => {
  const dispatch = useAppDispatch();
  const currentDraggableItem = useTypedSelector((state) => state.layout.currentDraggableItem);
  const navigate = useNavigate();
  
  const width = useTypedSelector((state) => state.layout.windowWidth);
  const [isHover, setIsHover] = useState(false);
  const [isButtonHover, setIsButtonHover] = useState(false);
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
        cols={1}
        rowHeight={container.height}
        width={width - 76 - (width - 120) * 0.3}
        margin={[8, 8]}
        resizeHandles={['sw', 'se']}
        isDraggable={!isDraggingInnerItem}
        isDroppable
        onDrop={(layout: Layout[], layoutItem: Layout) => {
          const draggableItem = currentDraggableItem;
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
        {container.elements.activeElements.map((el) => (
          <div key={el.layout.i} className={classes['item']} >
            <ElementToolsPanel layout={el.layout} id={container.id} setDraggingInnerItem={handleSetDraggingInnerItem} elClass='drag-area'/>
            <DynamicComponentRenderer
              Component={el.name}
              source={el.source || 'atoms'}
              props={el.props}
              columns={el.columns || 1}
              layout={el.layout}
              children={el.children}
              containerId={container.id}
            />
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
            <PlusCircleOutlined style={{ color: '#2dc08d', fontSize: 30 }} onPointerEnter={undefined} onPointerLeave={undefined}/>
          ) : (
            <PlusCircleFilled style={{ color: '#2dc08d', fontSize: 30 }} onPointerEnter={undefined} onPointerLeave={undefined} />
          )}
        </button>
      )}
      <button onClick={handleEmailClick}>email</button>
    </div>
  );
};