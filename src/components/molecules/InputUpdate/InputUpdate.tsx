import { nanoid } from 'nanoid';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import {
  ISettingsInputUpdateProps,
  T_Id,
  ISettingsInputItem,
  T_Value,
} from '@/types/landingBuilder';
import classes from './InputUpdate.module.scss';

const InputUpdate = ({ itemsList, setItemsList }: ISettingsInputUpdateProps) => {
  const handleAddInput = () => {
    const updatedItemsList = [...itemsList, { id: nanoid(), value: '' }];
    setItemsList(updatedItemsList);
  };

  const handleInputChange = (id: T_Id, value: T_Value) => {
    const updatedItemsList = itemsList.map((item: ISettingsInputItem) =>
      item.id === id ? { ...item, value } : item,
    );
    setItemsList(updatedItemsList);
  };

  const handleRemoveInput = (id: T_Id) => {
    if (itemsList.length > 1) {
      const updatedItemsList = [...itemsList.filter((item: ISettingsInputItem) => item.id !== id)];
      setItemsList(updatedItemsList);
    }
  };

  return (
    <Box className={classes.generalContainer}>
      <Typography variant="h4" className={classes.title}>
        Input Text
      </Typography>
      <Box className={classes.editingContainer}>
        <Box className={classes.list}>
          {itemsList.map((item: ISettingsInputItem) => (
            <Box className={classes.listItem} key={item.id}>
              <TextField
                size="small"
                id="outlined"
                placeholder="Text"
                variant="outlined"
                value={item.value}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                className={classes.input}
              />

              <IconButton
                aria-label="Remove"
                className={classes.btn}
                onClick={() => {
                  handleRemoveInput(item.id);
                }}
              >
                <RemoveCircleOutline />
              </IconButton>
            </Box>
          ))}
        </Box>
        <Box className={classes.btnPlus}>
          <IconButton aria-label="Add" className={classes.btn} onClick={handleAddInput}>
            <AddCircleOutline />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default InputUpdate;
