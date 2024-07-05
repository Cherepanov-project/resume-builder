import { useState } from 'react';
import {
  Stack,
  FormControl
} from '@mui/material';
import styles from './ElementSpecificStylesForm.module.scss'
import Item from '@atoms/StyledPaperItem';

const ElementSpecificStylesForm = ({handleUpdate, col }) => {
  const [borderOn, setBorderOn] = useState<number>(0);
  return (
    <form>
      <Stack>
        <Item>
          <FormControl>
            <label>
              <span className={styles.inputLabel}>Text size:</span>
              <input
                className={styles.textInput}
                type='number'
                min={8}
                max={50}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleUpdate('style', {fontSize: `${e.target.value}px`}, col - 1);
                }}
              ></input>
            </label>
          </FormControl>
        </Item>
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
              <span className={styles.inputLabel}>Background image url:</span>
              <input
                className={styles.textInput}
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleUpdate('style', {backgroundImage: `url(${e.target.value})`}, col - 1);
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
                className={styles.rangeInput}
                type='range'
                value={borderOn}
                min={0}
                max={10}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setBorderOn(+e.target.value);
                  handleUpdate('style', {border: `${e.target.value}px solid`}, col - 1);
                }}
              ></input>
            </label>
          </FormControl>
        </Item>
        {borderOn > 0 &&
        <>
          <Item>
            <FormControl>
              <label>
                <span className={styles.inputLabel}>Border color:</span>
                <input
                  className={styles.colorInput}
                  type='color'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log('test');
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
                  className={styles.textInput}
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
        </>}
      </Stack>
    </form>
  );
};

export default ElementSpecificStylesForm;
