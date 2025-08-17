import { EyeFilled } from '@ant-design/icons';

import PreviewPopup from '@molecules/PreviewPopup/PreviewPopup.tsx';
import { useState } from 'react';
import DefaultButton from '@atoms/DefaultButton';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setPreview } from '@/store/landingBuilder/utilitySlice';

interface PreviewData {
  content?: string;
  settings?: Record<string, unknown>;
  style?: React.CSSProperties;
}

interface Props {
  label: string;
  preview: PreviewData;
}

const PreviewButtonsContainer: React.FC<Props> = ({ label, preview }) => {
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
          dispatch(setPreview(JSON.stringify(preview)));
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
