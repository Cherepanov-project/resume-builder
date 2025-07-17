import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

import PreviewPopup from "@molecules/PreviewPopup/PreviewPopup.tsx";
import { useState } from "react";
import DefaultButton from "@atoms/DefaultButton";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setPreview } from "@/store/landingBuilder/utilitySlice";

interface PreviewData {
  content?: string;
  settings?: Record<string, unknown>;
  style?: React.CSSProperties;
}

interface Props {
  label: string;
  preview: PreviewData;
  onPreviewToggle?: () => void; // Новый prop для переключения режима
  isExitButton?: boolean; // Флаг для кнопки выхода
}

const PreviewButtonsContainer: React.FC<Props> = ({
  label,
  preview,
  onPreviewToggle,
  isExitButton = false,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onToggleModal = (value: boolean) => {
    setModalOpen(value);
  };

  const handlePreviewClick = () => {
    if (onPreviewToggle) {
      // Если передана функция переключения, используем её для локального превью
      onPreviewToggle();
    } else {
      // Иначе используем старую логику с модальным окном
      dispatch(setPreview(JSON.stringify(preview)));
      onToggleModal(true);
    }
  };

  return (
    <Box>
      <DefaultButton
        label={label}
        onClick={handlePreviewClick}
        primary={isExitButton} // Выделяем кнопку выхода
      >
        {isExitButton ? <EyeInvisibleFilled /> : <EyeFilled />}
      </DefaultButton>
      {!onPreviewToggle && <PreviewPopup isModalOpen={isModalOpen} onToggleModal={onToggleModal} />}
    </Box>
  );
};

export default PreviewButtonsContainer;
