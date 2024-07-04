import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
} from '@mui/material'
import styles from './ElementSpecificStylesForm.module.scss'
import Item from '@atoms/StyledPaperItem';

const ElementSpecificStylesForm = ({handleUpdate, col }) => {
  return (
    <form>
      <Stack>
        <Item>
          <FormControl>
            <label>
              <span className={styles.inputLabel}>Text color:</span>
              <input
                className={styles.colorInput}
                type='color'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleUpdate('style', {color: e.target.value}, col - 1);
                }}
              ></input>
              </label>
            </FormControl>
        </Item>
        <Item>
          <FormControl>
            <label>
              <span className={styles.inputLabel}>Background color:</span>
              <input
                className={styles.colorInput}
                type='color'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleUpdate('style', {backgroundColor: e.target.value}, col - 1);
                }}
              ></input>
            </label>
          </FormControl>
        </Item>
        <Item>
          <FormControl>
            <label>
              <span className={styles.inputLabel}>Border:</span>
              <input
                className={styles.colorInput}
                type='range'
                min={0}
                max={10}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleUpdate('style', {border: `${e.target.value}px solid`}, col - 1);
                }}
              ></input>
            </label>
          </FormControl>
        </Item>
        <Item>
          <FormControl>
            <label>
              <span className={styles.inputLabel}>Border color:</span>
              <input
                className={styles.colorInput}
                type='color'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleUpdate('style', {borderColor: e.target.value}, col - 1);
                }}
              ></input>
              </label>
            </FormControl>
        </Item>
        <Item>
          <FormControl>
            <label>
              <span className={styles.inputLabel}>Border radius:</span>
              <input
                className={styles.colorInput}
                type='number'
                min={0}
                max={30}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleUpdate('style', {borderRadius: `${e.target.value}px`}, col - 1);
                }}
              ></input>
            </label>
          </FormControl>
        </Item>
          <Item>
          <FormControl>
            <InputLabel id="type-label">Text size:</InputLabel>
            <Select
              labelId="type-label"
              sx={{ width: '220px' }}
              onChange={(e: SelectChangeEvent<string>) => {
                handleUpdate('style', {border: `${e.target.value} solid red`}, col - 1);
              }}
              input={<OutlinedInput label="Choose element type" />}
            >
              {['1px','2px','5px','10px'].map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Item>
      </Stack>
    </form>
  );
};

export default ElementSpecificStylesForm;
