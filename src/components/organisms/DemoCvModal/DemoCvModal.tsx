import { useRef, useCallback } from 'react';
import ReactToPrint from 'react-to-print';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { Modal } from '../../atoms/Modal';
import { ComponentToPrint } from '../../atoms/ComponentToPrint';

interface DemoCvModalProps {
  content: React.ReactElement;
  isOpen?: boolean;
  onClose?: () => void;
}

export const DemoCvModal = (props: DemoCvModalProps) => {
  const { content, isOpen, onClose } = props;
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

  const pageStyle = `
    @page {
      size: '794px 1123px';
      margin: 0mm;
    },
  `;

  // const pageStyle = `
  // @media print': {boxShadow: 'none !important', '@page': {size: '794px 1123px', margin: 0}
  // `;

  //   const pageStyle = `
  //   @page {
  //     size: 2.5in 4in
  //   }
  // `;

  // четко задать высоту и ширину size
  // проверить есть ли разница между маком и виндой

  return (
    <>
      <Modal name="DemoCv" isOpen={isOpen} onClose={onClose}>
        <ReactToPrint
          trigger={reactToPrintTrigger}
          content={reactToPrintContent}
          documentTitle="CV"
          pageStyle={pageStyle}
        />
        <ComponentToPrint content={content} ref={componentRef} />
      </Modal>
    </>
  );
};
