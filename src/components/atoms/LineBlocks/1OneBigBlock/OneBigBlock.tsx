import Box from '@mui/material/Box';
interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const OneBigBlock = ({ id, onDragStart, onDrop, onDragOver }: LineCardProps) => {
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
        <Box
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
        }}
      >
        Big Block
      </Box>
    </Box>
  );
};

export default OneBigBlock;