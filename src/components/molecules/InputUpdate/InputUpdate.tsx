import { Input } from 'antd';
import { nanoid } from 'nanoid';
import classes from './InputUpdate.module.scss';
import { IconButton } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { SettingsInputUpdateProps, ComponentType, SettingsInputItem } from '@/types/landingBuilder';

const InputUpdate = ({ itemsList, setItemsList }: SettingsInputUpdateProps) => {
  const handleAddInput = () => {
    const updatedItemsList = [...itemsList, { id: nanoid(), value: '', label: '' }];
    setItemsList(updatedItemsList);
  };

  const handleInputChange = (id: string, value: string | number, label: string | number) => {
    const updatedItemsList = itemsList.map((item: SettingsInputItem) =>
      item.id === id ? { ...item, value, label } : item,
    );
    setItemsList(updatedItemsList);
  };

  const handleRemoveInput = (id: ComponentType) => {
    if (itemsList.length > 1) {
      const updatedItemsList = [...itemsList.filter((item: SettingsInputItem) => item.id !== id)];
      setItemsList(updatedItemsList);
    }
  };

  return (
    <div className={classes.editingContainer}>
      <ul className={classes.list}>
        {itemsList.map((item: SettingsInputItem) => (
          <li className={classes.listItem} key={item.id}>
            <Input
              placeholder="Text"
              value={item.value}
              onChange={(e) => handleInputChange(item.id, e.target.value, e.target.value)}
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
  );
};

export default InputUpdate;
