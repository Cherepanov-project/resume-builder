import { Table, TableBody, TableRow, TableCell, ThemeProvider } from '@mui/material';
import { Suspense, lazy, memo } from 'react';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { addChildElement } from '@/store/LetterBuilderStore/letterLayoutSlice';
import ComponentPreloader from '../ComponentPreloader';
import { ISettingsInputItem } from '@/types/landingBuilder';
import theme from './Theme';

interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  blockWidth: string[];
  props: {
    [key: string]: string | string[] | number | { [key: string]: string | number } | ISettingsInputItem[] | [string, string][];
  };
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop?: (e: React.DragEvent, id: string) => void;
  onDragOver?: (e: React.DragEvent) => void;
}

interface DynamicChildComponentRendererProps {
  source?: string;
  Component: string;
}
const DynamicChildComponentRenderer: React.FC<DynamicChildComponentRendererProps> = memo(
  ({ Component }) => {
    if (typeof Component === 'undefined') return null;
    const DynamicComponent = lazy(() => import(`@components/atoms/LineBlocksContent/${Component}/index.ts`));

    return (
      <Suspense fallback={<ComponentPreloader />}>
        <DynamicComponent
          key={Component}
        />
      </Suspense>
    );
  },
)

const BlockLine = ({ id, onDragStart, props }: LineCardProps) => {
  const gridContainers = useTypedSelector((state) => state.letterLayout.gridContainers);
  const currentDraggableItem = useTypedSelector((state) => state.letterLayout.currentDraggableItem);
  const dispatch = useAppDispatch();

  const handleDrop = (index: number) => {
    if (currentDraggableItem && currentDraggableItem.props.isChild) {
      dispatch(addChildElement({draggableItem: currentDraggableItem, idParentElement: id, indexChild: index})); 
    }
  };

  const childrenElements: Array<JSX.Element | null> = [] 
  
  gridContainers.forEach((container) => {
    const index = container.elements.activeElements.findIndex((item) => item.id === id)

    if (index > -1) {
      if (typeof container.elements.activeElements[index].children !== 'undefined') {
        if (container.elements.activeElements[index].children.length > 0) {
          container.elements.activeElements[index].children.forEach((child, indexChild) => {
            if (typeof child !== 'undefined' &&
                child !== null
            ) {
              childrenElements[indexChild] = (
                <DynamicChildComponentRenderer
                  source={'atoms'}
                  Component={child.name}
                />
              )
            } else {
              childrenElements[indexChild] = null
            }
          })
        }
      }
    } 
  })

  let blockElements: Array<JSX.Element | null> = []

  if (typeof props.blockWidth === 'object') {
    if (Array.isArray(props.blockWidth)) {
      blockElements = props.blockWidth.map((width, index) => (
        <TableCell
          key={index}
          variant="letterBlockCell"
          sx={{
            width: width,
            color: childrenElements[index] ? 'black' : '#4cb9ea',
            textAlign: 'center',
          }}
          onDrop={() => handleDrop(index)}
        >
          {childrenElements[index] ? childrenElements[index] : 'Перетащить блоки контента сюда'}
        </TableCell>
      ))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Table>
        <TableBody> 
          <TableRow
            id={id}
            draggable
            onDragStart={(e) => onDragStart(e, id)}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
            }}
          >
            {blockElements}
          </TableRow>
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default BlockLine;