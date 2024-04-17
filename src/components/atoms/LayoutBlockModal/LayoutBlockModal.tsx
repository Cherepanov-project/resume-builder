import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ILayoutBlock } from '@/types/landingBuilder';


const BasicModal: FC<ILayoutBlock> = ({ props }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bgColor = props?.style?.backgroundColor
  const border = props?.style?.border
  const col = props?.style?.color

console.log('m', props)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: bgColor ? bgColor : 'background.paper',
    border: border? border: '2px solid #000',
    color: col? col: '#1976d2',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div>
      <Button onClick={handleOpen}>{props.text[0] || 'Click here to open modal'}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.text[1] || 'Here is your modal title'}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.text[2] || 'Wow! You opened modal.'}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
