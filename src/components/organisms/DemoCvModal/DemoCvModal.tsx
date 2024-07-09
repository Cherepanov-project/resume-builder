import React, { useCallback, useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { Modal } from '@atoms/Modal';
import { ComponentToPrint } from '@atoms/ComponentToPrint';

interface DemoCvModalProps {
  content?: React.ReactElement;
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

  const pageStyle = `
    @page {
      size: '794px 1123px';
      margin: 0mm;
    },
  `;

  return (
    <Modal name="DemoCv" isOpen={isOpen} onClose={onClose}>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="CV"
        pageStyle={pageStyle}
      />
      <ComponentToPrint content={content} ref={componentRef} />
    </Modal>
  );
};
