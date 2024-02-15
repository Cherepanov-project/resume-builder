import { lazy, memo, Suspense, useMemo } from 'react';
import ResponsiveGridLayout, { Layout } from 'react-grid-layout';
import { useAppSellector } from '@hooks/cvTemplateHooks.ts';

import { DynamicComponentRendererProps, T_BlockElement } from '@/types/landingBuilder';
import ComponentPreloader from '@atoms/ComponentPreloader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
  const activeElements = useAppSellector((state) => state.layout.activeElements);

  // мемоизируем массив Layout
  const previewLayout: ResponsiveGridLayout.Layout[] = useMemo(() => {
    return activeElements.reduce((acc: Layout[], el: T_BlockElement) => {
      const previewElem = { ...el.layout };
      previewElem.isDraggable = false;
      previewElem.static = true;
      return [...acc, previewElem];
    }, []);
  }, [activeElements]);

  //сортировка может потребоваться для настройки респонсива
  const sortedPreviewLayout = previewLayout.sort((a, b) => {
    if (a.y < b.y) {
      return -1;
    }
    if (a.y > b.y) {
      return 1;
    }
    // If 'y' is equal, compare by 'x' property
    if (a.x < b.x) {
      return -1;
    }
    if (a.x > b.x) {
      return 1;
    }
    // If both 'y' and 'x' are equal, no need to sort further
    return 0;
  });
  console.log(sortedPreviewLayout);

  return (
    <Box
      className="previewSpace"
      sx={{
        backgroundColor: 'transparent',
        minHeight: '97dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridAutoRows: '30px',
          gridAutoFlow: 'row',
          gridTemplateColumns: ' repeat(6, 1fr)',
          width: '100%',
          p: '0 1em',
          gap: '8px',
          alignItems: 'stretch',
          justifyItems: 'stretch',
        }}
      >
        {activeElements.map((el) => {
          return (
            <Box
              key={el.layout.i}
              sx={{
                gridColumnStart: `${el.layout.x + 1}`,
                gridColumnEnd: `span ${el.layout.w}`,
                gridRowStart: `${el.layout.y + 1}`,
                gridRowEnd: `span ${el.layout.h}`,
                backgroundColor: 'white',
                borderRadius: '2px',
              }}
              className={`${el.layout.i}`}
            >
              <MemoDynamicComponentRenderer
                Component={el.name}
                source={el.source || 'atoms'}
                props={el.props}
                columns={el.columns || 1}
                children={el.children}
                layout={el.layout}
              />
            </Box>
          );
        })}
      </Box>
      <Typography component="span" display="inline" sx={{ pt: '20px' }}>
        Copyright © 2024 Landing Builder DreamTeam ltd
      </Typography>
    </Box>
  );
};

export default PreviewSpace;