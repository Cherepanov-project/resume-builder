import { lazy, memo, Suspense, useEffect, useMemo } from 'react'
import ResponsiveGridLayout, { Layout } from 'react-grid-layout';
import { useAppDispatch, useTypedSelector } from '@hooks/cvTemplateHooks.ts'

import { DynamicComponentRendererProps, T_BlockElement } from '@/types/landingBuilder';
import ComponentPreloader from '@atoms/ComponentPreloader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IGridContainers, setWindowWidth } from '@/store/landingBuilder/layoutSlice'

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
const MemoDynamicComponentRenderer = memo(DynamicComponentRenderer);

const PreviewSpace = () => {
  const dispatch = useAppDispatch();
  const gridContainers = useTypedSelector((state) => state.layout.gridContainers);
  const previewSetting = useTypedSelector((state) => state.utility.previewOpened);
  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const width = useTypedSelector((state) => state.layout.windowWidth);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);
  const calcX = (row: number, col: number) => {
    if (col !== 1) {
      let sum = 0;
      for (let i = 1; i < col; i++) {
        sum += layoutDate[row][i - 1].layout.w;
      }
      return sum;
    } else {
      return 0;
    }
  };

  const calcY = (row: number) => {
    if (row > 1) {
      let x = 1;
      for (let i = 0; i < layoutDate[row - 1].length; i++) {
        if (layoutDate[row - 1][i].layout.h > x) {
          x = layoutDate[row - 1][i].layout.h;
        }
      }
      return x;
    } else {
      return 0;
    }
  };
  const gridContainersPreview: IGridContainers[] = JSON.parse(JSON.stringify(gridContainers));
  let activeElements: T_BlockElement[] = useMemo(() => [], []);
  if (previewSetting === 'section') {
    const arr: T_BlockElement[] = [];
    const data = Object.values(layoutDate);
    for (let i = 0; i < data.length; i++) {
      arr.push(...data[i]);
    }

    const filteredArr = arr.filter((el) => el.name);
    for (const container of gridContainersPreview) {
      activeElements = activeElements.concat(container.elements.activeElements);
      container.elements.activeElements = filteredArr.map((el) => ({
        name: el.name,
        source: 'atoms',
        layout: {
          i: String(el.layout.i),
          x: calcX(Number(String(el.layout.i).slice(0, 1)), Number(String(el.layout.i).slice(1))),
          y: calcY(Number(String(el.layout.i).slice(0, 1))), // el.y,
          w: el.layout.w,
          h: el.layout.h,
        },
        props: el.props,
      }));
    }
  }

  const previewLayout: ResponsiveGridLayout.Layout[] = useMemo(() => {
    return activeElements.reduce((acc: Layout[], el: T_BlockElement) => {
      const previewElem = { ...el.layout };
      previewElem.isDraggable = false;
      previewElem.static = true;
      return [...acc, previewElem];
    }, []);
  }, [activeElements]);

  const sortedPreviewLayout = previewLayout.sort((a, b) => {
    if (a.y < b.y) {
      return -1;
    }
    if (a.y > b.y) {
      return 1;
    }
    if (a.x < b.x) {
      return -1;
    }
    if (a.x > b.x) {
      return 1;
    }
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
      {gridContainersPreview.map((container) => (
        <Box
          key={container.id}
          sx={{
            display: 'grid',
            gridAutoRows: '30px',
            gridAutoFlow: 'row',
            gridTemplateColumns: ' repeat(6, 1fr)',
            width: `${width - 107.2 - (width - 120) * 0.3}px`,
            p: '0 1em',
            gap: '8px',
            alignItems: 'stretch',
            justifyItems: 'stretch',
          }}
        >
          {container.elements.activeElements.map((el) => {
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
      ))}
      <Typography component="span" display="inline" sx={{ pt: '20px' }}>
        Copyright © 2024 Landing Builder DreamTeam ltd
      </Typography>
    </Box>
  );
};

export default PreviewSpace;
