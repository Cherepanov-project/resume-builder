import { EyeFilled } from '@ant-design/icons';

import PreviewPopup from '@molecules/PreviewPopup/PreviewPopup.tsx';
import { useState } from 'react';
import DefaultButton from '@atoms/DefaultButton';

const PreviewButtonsContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const onToggleModal = (value: boolean) => {
    setModalOpen(value);
  };

  return (
    <div>
      <DefaultButton label="Preview" onClick={() => onToggleModal(true)}>
        <EyeFilled />
      </DefaultButton>
      <PreviewPopup isModalOpen={isModalOpen} onToggleModal={onToggleModal} />
    </div>
  );
};

export default PreviewButtonsContainer;
