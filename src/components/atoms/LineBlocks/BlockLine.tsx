import { Table, TableBody, TableRow, TableCell, ThemeProvider } from '@mui/material';
import { Suspense, lazy, memo } from 'react';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { addChildElement } from '@/store/LetterBuilderStore/letterLayoutSlice';
import ComponentPreloader from '../ComponentPreloader';
import theme from './Theme';

interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  blockWidth: string[];
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

const BlockLine = ({ id, onDragStart, blockWidth }: LineCardProps) => {
  const gridContainers = useTypedSelector((state) => state.letterLayout.gridContainers);
  const currentDraggableItem = useTypedSelector((state) => state.letterLayout.currentDraggableItem);
  const dispatch = useAppDispatch();

  const handleDrop = (index: number) => {
    if (currentDraggableItem) {
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
            if (typeof container.elements.activeElements[index].children[indexChild] !== 'undefined' &&
                container.elements.activeElements[index].children[indexChild] !== null
            ) {
              childrenElements[indexChild] = (
                <DynamicChildComponentRenderer
                  source={'atoms'}
                  Component={container.elements.activeElements[index].children[indexChild].name}
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

  const blockElements = blockWidth.map((width, index) => (
    <TableCell
      key={index}
      sx={{
        width: width
      }}
      onDrop={() => handleDrop(index)}
    >
      {childrenElements[index]}
    </TableCell>
  ))

  return (
    <ThemeProvider theme={theme}>
      <Table>
        <TableBody> 
          <TableRow
            id={id}
            draggable
            onDragStart={(e) => onDragStart(e, id)}
          >
            {blockElements}
          </TableRow>
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default BlockLine;