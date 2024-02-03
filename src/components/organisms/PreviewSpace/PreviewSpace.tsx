import { lazy, memo, Suspense, useEffect, useMemo, useState } from 'react';
import ResponsiveGridLayout, { Layout } from 'react-grid-layout';
import { useAppSellector } from '@hooks/cvTemplateHooks.ts';

import { DynamicComponentRendererProps, T_BlockElement } from '@/types/landingBuilder';
import ComponentPreloader from '@atoms/ComponentPreloader';
import classes from './PreviewSpace.module.scss';

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
//убираем перерендер компонентов превью
const MemoDynamicComponentRenderer = memo(DynamicComponentRenderer);
// ========================================================================== \\

const PreviewSpace = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const activeElements = useAppSellector((state) => state.layout.activeElements);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // мемоизируем массив Layout
  const previewLayout: ResponsiveGridLayout.Layout[] = useMemo(() => {
    console.log('перерендер');
    return activeElements.reduce((acc: Layout[], el: T_BlockElement) => {
      const previewElem = { ...el.layout };
      previewElem.isDraggable = false;
      previewElem.static = true;
      return [...acc, previewElem];
    }, []);
  }, [activeElements]);

  return (
    <div className={classes.previewSpace}>
      <ResponsiveGridLayout
        layout={previewLayout}
        className={classes.grid}
        cols={6}
        rowHeight={30}
        width={width}
        margin={[8, 8]}
        isDraggable={false}
        isDroppable={false}
      >
        {activeElements.map((el) => {
          return (
            <div key={el.layout.i} className={classes['item']}>
              <MemoDynamicComponentRenderer
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
      <span style={{ paddingTop: '20px' }}>Copyright © 2024 Landing Builder DreamTeam ltd</span>
    </div>
  );
};

export default PreviewSpace;
