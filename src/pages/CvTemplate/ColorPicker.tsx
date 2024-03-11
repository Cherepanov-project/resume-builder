import { FC, useState } from 'react';
import { Box } from '@mui/material';

const ColorPicker: FC = ({ handleStyleChange, place, styles }) => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const circles = [
    { color: 'red', id: 1 },
    { color: 'blue', id: 2 },
    { color: 'green', id: 3 },
    { color: 'white', id: 4 },
    { color: 'black', id: 5 },
  ];

  const handleClick = (circleId, circleColor, place, style) => {
    setSelectedCircle(circleId);
    handleStyleChange(circleColor, place, style);
  };
  return (
    <Box>
      {circles.map((circle) => (
        <Box
          key={circle.id}
          sx={{
            cursor: 'pointer',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: circle.color,
            display: 'inline-block',
            margin: '10px',
            position: 'relative',
            border: '5px solid grey',
          }}
          onClick={() => handleClick(circle.id, circle.color, place, styles)}
        >
          {selectedCircle === circle.id && (
            <svg
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ColorPicker;
