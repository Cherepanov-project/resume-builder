import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { useState, Suspense, lazy, memo } from 'react';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import { IGridContainers } from '@/store/LetterBuilderStore/letterLayoutSlice';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { addChildElement } from '@/store/LetterBuilderStore/letterLayoutSlice';
import { DynamicComponentRendererProps } from '@/types/landingBuilder';
import ComponentPreloader from '../../ComponentPreloader';

interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

interface DynamicChildComponentRendererProps {
  source: string;
  Component: string;
}
const DynamicChildComponentRenderer: React.FC<DynamicChildComponentRendererProps> = memo(
  ({ Component, source }) => {
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

const OneBigBlock = ({ id, onDragStart, onDrop, onDragOver }: LineCardProps) => {
  const gridContainers = useTypedSelector((state) => state.letterLayout.gridContainers);
  const currentDraggableItem = useTypedSelector((state) => state.letterLayout.currentDraggableItem);
  const dispatch = useAppDispatch();

  const handleDrop = () => {
    if (currentDraggableItem) {
      dispatch(addChildElement({draggableItem: currentDraggableItem, idParentElement: id})); 
    }
  };

  const childrenElements: JSX.Element[] = [] 
  
  gridContainers.forEach((container) => {
    const index = container.elements.activeElements.findIndex((item) => item.id === id)

    if (index > -1) {
      if (container.elements.activeElements[index].children.length > 0) {
        childrenElements.push((
          <DynamicChildComponentRenderer
            source={'atoms'}
            Component={container.elements.activeElements[index].children[0].name}
          />
        ))
      }
    } 
  })

  return (
    <Table>
    <TableBody> 
    <TableRow
      id={id}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDrop={() => handleDrop()}
      sx={{
        backgroundColor: 'transparent',
        color: 'rgb(0, 0, 0)',
        width: '100%',
        borderRadius: '4px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '8px',
        padding: '8px',
        boxSizing: 'border-box',
      }}
    >
        <TableCell
        sx={{
          width: 'calc(100% - 8px)', // One Big block
          height: '100px',
          borderWidth: '2px',
          borderColor: 'blue',
          borderStyle: 'dotted',
          backgroundColor: '#e8faff',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          '&:hover': {
            borderStyle: 'solid',
          }
        }}
      >
        {childrenElements.length > 0 ? childrenElements : 'One Big Block'}
      </TableCell>
    </TableRow>
    </TableBody>
    </Table>
  );
};

export default OneBigBlock;