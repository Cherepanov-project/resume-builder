import { nanoid } from 'nanoid';
import classes from './InputUpdate.module.scss';
import { IconButton, TextField } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import {
  ISettingsInputUpdateProps,
  T_Id,
  ISettingsInputItem,
  T_Value,
} from '@/types/landingBuilder';

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
    <div className={classes.generalContainer}>
      <h3 className={classes.title}>Input Text</h3>
      <div className={classes.editingContainer}>
        <ul className={classes.list}>
          {itemsList.map((item: ISettingsInputItem) => (
            <li className={classes.listItem} key={item.id}>
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
            </li>
          ))}
        </ul>
        <div className={classes.btnPlus}>
          <IconButton aria-label="Add" className={classes.btn} onClick={handleAddInput}>
            <AddCircleOutline />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default InputUpdate;
