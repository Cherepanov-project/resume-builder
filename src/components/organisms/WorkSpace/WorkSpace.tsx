import { lazy, Suspense, useEffect, useState } from 'react';
import ResponsiveGridLayout, { Layout } from 'react-grid-layout';

import { addElement, changeElement } from '@store/landingBuilder/layoutSlice';
import { useAppDispatch, useAppSellector } from '@hooks/cvTemplateHooks';
import ComponentPreloader from '@components/atoms/ComponentPreloader';
import ElementToolsPanel from '@components/organisms/ElementToolsPanel';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import classes from './WorkSpace.module.scss';
import { T_BlockElement } from '@/types/landingBuilder';

type DynamicComponentRendererProps = {
  Component: string;
  props?: { [key: string]: string | number | { [key: string]: string | number } };
  columns: number;
  source: string;
  children?: T_BlockElement[];
  layout: Layout;
};

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
  // const DynamicComponent = lazy(() => import(`@atoms/${Component}/index.ts`));
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
  const draggableItem = useAppSellector((state) => state.layout.currentDraggableItem);
  const activeElements: T_BlockElement[] = useAppSellector((state) => state.layout.activeElements);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDropElement = (layout: Layout[], layoutItem: Layout) => {
    dispatch(addElement({ draggableItem, layoutItem, layout }));
  };

  // Вытаскиваем макеты наших активных компонентов
  const workspaceLayout = activeElements.reduce((acc: Layout[], el: T_BlockElement) => {
    return [...acc, el.layout];
  }, []);

  const handleChangeElement = (_layout: Layout[], oldItem: Layout, newItem: Layout) => {
    const isChange = JSON.stringify(oldItem) !== JSON.stringify(newItem);
    if (isChange) dispatch(changeElement(newItem));
  };

  return (
    <div className={classes['workspace']}>
      <ResponsiveGridLayout
        className={classes['grid']}
        layout={workspaceLayout}
        cols={6}
        rowHeight={30}
        // 76 пикселей зарезервировано под сайдбар + отступ слева.
        width={width - 76 - (width - 120) * 0.3}
        margin={[8, 8]}
        resizeHandles={['sw', 'se']}
        isDraggable
        isDroppable
        onDrop={handleDropElement}
        draggableHandle=".drag-area"
        onResizeStop={handleChangeElement}
        onDragStop={handleChangeElement}
      >
        {/* Динамически подгружаем компоненты и прокидывааем в них пропсы из одноимменных объектов */}
        {activeElements.map((el) => {
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
    </div>
  );
};

export default WorkSpace;
