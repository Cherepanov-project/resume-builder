import { lazy, Suspense, useRef, useEffect, useState } from 'react';
import ResponsiveGridLayout from 'react-grid-layout';

import { addElement } from '@/store/landingBuilder/layoutSlice';
import { useAppDispatch, useAppSellector } from '@hooks/cvTemplateHooks';
import ComponentPreloader from '@components/atoms/ComponentPreloader';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import classes from './ContainerDIV.module.scss';

// Отрисовываем динамический компонент
const DynamicComponentRenderer = ({ Component, props, source, children, layout }) => {
  let DynamicComponent = () => <></>;

  if (source === 'organisms') {
    DynamicComponent = lazy(() => import(`@organisms/${Component}/index.ts`));
  }
  if (source === 'molecules') {
    DynamicComponent = lazy(() => import(`@molecules/${Component}/index.ts`));
  }
  if (source === 'atoms') {
    DynamicComponent = lazy(() => import(`@atoms/${Component}/index.ts`));
  }

  return (
    <Suspense fallback={<ComponentPreloader />}>
      <DynamicComponent
        key={Component}
        props={props}
        source={source}
        children={children}
        layout={layout}
      />
    </Suspense>
  );
};

const ContainerDIV: React.FC = ({ children, layout, columns }) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const draggableItem = useAppSellector((state) => state.layout.currentDraggableItem);

  useEffect(() => {
    // Для выравнивания дочерних элементов указываем начальное значение ширины родителя.
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    setWidth(containerWidth);

    // Отслеживаем изменение ширины родителя, чтобы динамически изменять ширину дочерних элементов.
    const handleResize = () => {
      setWidth(containerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [layout.w, window.innerWidth]); // Мониторим изменения ширины родителя и окна браузера.

  const onDrop = (layout, layoutItem, _event) => {
    const parentElement = _event.target.closest('.wrapper').dataset.id;

    dispatch(addElement({ draggableItem, layoutItem, parentElement }));
  };

  const workspaceLayout = children.reduce((acc, el) => {
    return [...acc, el.layout];
  }, []);

  return (
    <div ref={containerRef} className="wrapper" data-id={layout.i}>
      <ResponsiveGridLayout
        layout={workspaceLayout}
        cols={columns}
        width={width}
        rowHeight={30}
        margin={[0, 0]}
        isDraggable
        isDroppable
        onDrop={onDrop}
      >
        {children.map((el, indx) => {
          return (
            <div className={classes['item']} key={workspaceLayout[indx].i}>
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
      </ResponsiveGridLayout>
    </div>
  );
};

export default ContainerDIV;
