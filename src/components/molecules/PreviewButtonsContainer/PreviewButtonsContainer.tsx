import { EyeFilled } from '@ant-design/icons';

import PreviewPopup from '@molecules/PreviewPopup/PreviewPopup.tsx';
import { useState } from 'react';
import DefaultButton from '@atoms/DefaultButton';
import Box from '@mui/material/Box';

const PreviewButtonsContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const onToggleModal = (value: boolean) => {
    setModalOpen(value);
  };

  return (
    <Box>
      <DefaultButton label="Preview" onClick={() => onToggleModal(true)}>
        <EyeFilled />
      </DefaultButton>
      <PreviewPopup isModalOpen={isModalOpen} onToggleModal={onToggleModal} />
    </Box>
  );
};

export default PreviewButtonsContainer;
