import { useCallback, useState } from 'react';
import Button from '@mui/material/Button';

import { DemoCvModal } from '../DemoCvModal';

import classes from './DemoCv.module.scss';
import demoImage from '../../../assets/images/demo-cv.png';

const DemoCv = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={classes.demoCv}>
      <img className={classes.demoCv__image} src={demoImage} alt="demo" />
      <Button variant="contained" sx={{ mt: 1 }} onClick={onToggleModal}>
        Preview & Export
      </Button>
      <DemoCvModal img={demoImage} isOpen={isOpen} onClose={onToggleModal} />
    </div>
  );
};

export default DemoCv;
