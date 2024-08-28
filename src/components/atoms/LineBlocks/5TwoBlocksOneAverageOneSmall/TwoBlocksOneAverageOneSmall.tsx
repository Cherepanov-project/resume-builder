import { Table, TableBody, TableRow, TableCell } from '@mui/material';

interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const TwoBlocksOneAverageOneSmall = ({ id, onDragStart, onDrop, onDragOver }: LineCardProps) => {
  return (
    <Table>
    <TableBody> 
    <TableRow
      id={id}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, id)}
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
          width: 'calc(67% - 8px)', // One Average block
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
        }}
      >
        Average Block
      </TableCell>
      <TableCell
        sx={{

          width: 'calc(33.4% - 8px)', // One Mid block
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
        }}
      >
        Mid Block
      </TableCell>
    </TableRow>
    </TableBody>
    </Table>
  );
};

export default TwoBlocksOneAverageOneSmall;