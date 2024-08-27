import Box from '@mui/material/Box';

interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const LineCard = ({ icon, id, onDragStart, onDrop, onDragOver }: LineCardProps) => {
  return (
    <Box
      id={id}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, id)}
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        background: '#fff',
        borderRadius: '3px',
        display: 'block',
        padding: '15px',
        border: '1px solid #ccc',
        boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
        transitionDuration: '.15s',
        '&:hover': {
          boxShadow: '0 6px 10px rgba(0, 0, 0, .35)',
          border: '1px solid #ffffff',
          cursor: 'grab'
        }
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          verticalAlign: 'top',
          alignItems: 'center',
          display: 'flex',
          position: 'relative',
          flexFlow: 'column',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default LineCard;