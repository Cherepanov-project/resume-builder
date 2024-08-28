import { Table, TableBody, TableRow, TableCell } from '@mui/material';

interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const SixNanoBlocks = ({ id, onDragStart, onDrop, onDragOver }: LineCardProps) => {
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
        width: '100%', // Use full width for responsive design
        borderRadius: '4px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '8px', // Space between blocks
        padding: '8px', // Padding inside the container
        boxSizing: 'border-box',
      }}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <TableCell
          key={index}
          sx={{
            width: 'calc(16.666% - 8px)', // Six blocks in a row with gap
            height: '100px', // Height of each block
            borderWidth: '2px', // Border width for the entire container
            borderColor: 'blue', // Blue color for the border
            borderStyle: 'dotted', // Use dotted style for the border
            backgroundColor: '#e8faff', // Background color of blocks
            boxSizing: 'border-box',  
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
          }}
        >
          NanoBlock{index + 1}
        </TableCell>
      ))}
    </TableRow>
    </TableBody>
    </Table>
  );
};

export default SixNanoBlocks;