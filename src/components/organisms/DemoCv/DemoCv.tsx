import { useCallback, useState } from 'react';
import Button from '@mui/material/Button';

import { DemoCvModal } from '../DemoCvModal';
import { TemplatePdfCV } from '../../atoms/TemplatePdfCV';

import classes from './DemoCv.module.scss';

const DemoCv = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={classes.demoCv}>
      <TemplatePdfCV />
      <Button variant="contained" sx={{ mt: 1 }} onClick={onToggleModal}>
        Preview & Export
      </Button>
      <DemoCvModal content={<TemplatePdfCV />} isOpen={isOpen} onClose={onToggleModal} />
    </div>
  );
};

export default DemoCv;
