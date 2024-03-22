import { EyeFilled } from '@ant-design/icons';

import PreviewPopup from '@molecules/PreviewPopup/PreviewPopup.tsx';
import { useState } from 'react';
import DefaultButton from '@atoms/DefaultButton';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setPreview } from '@/store/landingBuilder/utilitySlice';

const PreviewButtonsContainer = ({ label, preview }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const onToggleModal = (value: boolean) => {
    setModalOpen(value);
  };
  const dispatch = useDispatch();

  return (
    <Box>
      <DefaultButton
        label={label}
        onClick={() => {
          dispatch(setPreview(preview));
          onToggleModal(true);
        }}
      >
        <EyeFilled />
      </DefaultButton>
      <PreviewPopup isModalOpen={isModalOpen} onToggleModal={onToggleModal} />
    </Box>
  );
};

export default PreviewButtonsContainer;
