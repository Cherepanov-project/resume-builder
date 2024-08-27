import Box from '@mui/material/Box';

interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const ThreeMidBlocks = ({ id, onDragStart, onDrop, onDragOver }: LineCardProps) => {
  return (
    <Box
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
      {Array.from({ length: 3}).map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 'calc(33.4% - 8px)', // Six blocks in a row with gap
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
          MidBlock {index + 1}
        </Box>
      ))}
    </Box>
  );
};
export default ThreeMidBlocks;