import { useCallback, useState } from 'react';
import Button from '@mui/material/Button';

import { DemoCvModal } from '../DemoCvModal';
import { CvTemplatePDF } from '../../../pages/CvTemplatePDF';

import classes from './DemoCv.module.scss';

const DemoCv = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={classes.demoCv}>
      <CvTemplatePDF />
      <Button variant="contained" sx={{ mt: 1 }} onClick={onToggleModal}>
        Preview & Export
      </Button>
      <DemoCvModal content={<CvTemplatePDF />} isOpen={isOpen} onClose={onToggleModal} />
    </div>
  );
};

export default DemoCv;
