import { useRef, useCallback } from 'react';
import ReactToPrint from 'react-to-print';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { Modal } from '../../atoms/Modal';
import { ComponentToPrint } from '../../atoms/ComponentToPrint';

import classes from '../DemoCv/DemoCv.module.scss';

interface DemoCvModalProps {
  img: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const DemoCvModal = (props: DemoCvModalProps) => {
  const { img, isOpen, onClose } = props;
  const componentRef = useRef(null);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentRef.current]);

  const reactToPrintTrigger = useCallback(() => {
    return (
      <Button variant="contained" sx={{ mb: 1 }} startIcon={<CloudUploadIcon />}>
        Download CV
      </Button>
    );
  }, []);

  const ComponentToPrintProps = <img className={classes.demoCv__image} src={img} alt="demo" />;

  const pageStyle = `
  @page {
    size: auto;  
    margin: 0mm;
  }
`;

  return (
    <>
      <Modal name="DemoCv" isOpen={isOpen} onClose={onClose}>
        <ReactToPrint
          trigger={reactToPrintTrigger}
          content={reactToPrintContent}
          documentTitle="CV"
          pageStyle={pageStyle}
        />
        <ComponentToPrint content={ComponentToPrintProps} ref={componentRef} />
      </Modal>
    </>
  );
};
