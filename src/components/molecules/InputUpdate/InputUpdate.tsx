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

const InputUpdate = ({
  itemsList,
  setItemsList,
  name,
  elementsSize,
  setElementsSize,
}: ISettingsInputUpdateProps) => {
  const checkIsMasonry = name === 'PhotoGallery' || name === 'Avatar';

  const handleAddInput = () => {
    let updatedItemsList;
    if (!checkIsMasonry) {
      updatedItemsList = [...itemsList, { id: nanoid(), value: '' }];
    } else {
      updatedItemsList = [...itemsList, { id: nanoid(), img: '', title: '' }];
    }
    setItemsList(updatedItemsList);
  };

  const handleInputChange = (id: T_Id, value: T_Value, isTitle: boolean = false) => {
    let updatedItemsList;
    if (!checkIsMasonry) {
      updatedItemsList = itemsList.map((item: ISettingsInputItem) =>
        item.id === id ? { ...item, value } : item,
      );
    } else {
      updatedItemsList = itemsList.map((item: ISettingsInputItem) =>
        item.id === id ? (isTitle ? { ...item, title: value } : { ...item, img: value }) : item,
      );
    }
    setItemsList(updatedItemsList as ISettingsInputItem[]);
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
        {!checkIsMasonry ? 'Input Text' : 'Pictures'}
      </Typography>
      <Box className={classes.editingContainer}>
        <Box className={classes.list}>
          {itemsList.map((item: ISettingsInputItem) => (
            <Box className={classes.listItem} key={item.id}>
              <Box>
                <TextField
                  size="small"
                  id="outlined"
                  placeholder={!checkIsMasonry ? 'Text' : 'Url'}
                  variant="outlined"
                  value={!checkIsMasonry ? item.value : item.img}
                  onChange={(e) => handleInputChange(item.id ? item.id : '', e.target.value)}
                  className={classes.input}
                  autoComplete="off"
                />

                {checkIsMasonry && (
                  <TextField
                    size="small"
                    id="outlined"
                    placeholder="Title"
                    variant="outlined"
                    value={!checkIsMasonry ? item.value : item.title}
                    onChange={(e) => handleInputChange(item.id ? item.id : '', e.target.value, true)}
                    className={classes.input}
                    autoComplete="off"
                  />
                )}
              </Box>

              <IconButton
                aria-label="Remove"
                className={classes.btn}
                onClick={() => {
                  handleRemoveInput(item.id ? item.id : '');
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
      {checkIsMasonry && (
        <Box className={classes.sizeBox}>
          <Typography variant="h4" className={classes.title}>
            Colums
          </Typography>
          <TextField
            size="small"
            id="outlined"
            placeholder="Number 1-10"
            variant="outlined"
            value={!isNaN(elementsSize) && elementsSize < 11 ? elementsSize : ''}
            onChange={(e) => setElementsSize(Number(e.target.value))}
            className={classes.sizeInput}
          />
        </Box>
      )}
    </Box>
  );
};

export default InputUpdate;
