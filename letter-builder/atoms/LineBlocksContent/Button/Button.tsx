import { Button } from "@mui/material"

// const ButtonComponent = () => {
//     return <Button sx={{width: '100%'}} variant="contained">Кнопка</Button>
// }

const ButtonComponent = () => {
    return (
      <button
        style={{
          width: '100%',
          backgroundColor: '#1976d2',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // add transition effect
        }}
      >
        Кнопка
      </button>
    );
  };
  
  export default ButtonComponent;
