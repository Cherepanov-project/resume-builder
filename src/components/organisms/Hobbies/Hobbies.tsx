import { Box, Button } from '@mui/material';
import BasicInput from '../../atoms/BasicInput';
import classes from './Hobbies.module.scss';

import { useAppSellector, useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { addHobby } from '../../../store/cvTemplate/hobbiesSlice';

const Hobbies = () => {
  const numOfHobbies = useAppSellector((state) => state.hobbies.numOfHobbies);
  const dispatch = useAppDispatch();

  return (
    <Box className={classes.hobbies}>
      {numOfHobbies.length === 1 ? (
        <BasicInput label="Your hobby" />
      ) : (
        numOfHobbies.map(() => {
          return <BasicInput label="Your hobby" />;
        })
      )}
      <Button onClick={() => dispatch(addHobby())} variant="contained">
        Add another Hobby
      </Button>
    </Box>
  );
};

export default Hobbies;
