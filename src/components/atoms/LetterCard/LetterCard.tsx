import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface LetterCardProps {
    icon: JSX.Element
    text: string
}

const LetterCard = ({ icon, text }: LetterCardProps) => {
    return (
      <Box 
        sx={{
          boxSizing: 'border-box',
          width: 'calc(33.3% - 15px)',
          background: '#fff',
          borderRadius: '3px',
          display: 'block',
          minHeight: '118px',
          padding: '18px 10px 10px 15px',
          border: '1px solid #ccc',
          boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
          transitionDuration: '.15s',
          '&:hover': {
            boxShadow: '0 6px 10px rgba(0, 0, 0, .35)',
            border: '1px solid #ffffff',
            cursor: 'pointer',
          }
        }}>
        <Box sx={{
          boxSizing: 'border-box',
          verticalAlign: 'top',
          alignItems: 'center',
          display: 'flex',
          position: 'relative',
          flexFlow: 'column',
          justifyContent: 'center',
        }}>
          <Box sx={{
            margin: '8px auto 15px auto',
            flex: '1.9 0 66%',
          }}>
            {icon}
          </Box>
          <Box>
            <Typography sx={{
              paddingTop: "0",
              hyphens: 'auto',
              wordBreak: 'break-word',
              wordWrap: 'break-word',
              fontSize: '12px',
              height: '26.4px',
              lineHeight: '1.1',
              marginTop: '4px',
              overflow: 'hidden',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
    )
}

export default LetterCard