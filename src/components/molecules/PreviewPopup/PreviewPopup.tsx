import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import DefaultButton from '@atoms/DefaultButton';
import { LocalFireDepartment } from '@mui/icons-material';
// import {useNavigate} from "react-router-dom";

type Props = {
  isModalOpen: boolean;
  onToggleModal: (data: boolean) => void;
};
const PreviewPopup = ({ isModalOpen, onToggleModal }: Props) => {
  // const navigate = useNavigate()

  const moveToPreview = async () => {
    await onToggleModal(false);
    console.log('GO!');
    window.open('/landing-preview', '_blank');
  };

  return (
    <Dialog open={isModalOpen} onClose={onToggleModal} fullWidth>
      <DialogTitle>{'Do you want to open a preview window?'}</DialogTitle>
      <DialogActions sx={{ padding: 3 }}>
        <DefaultButton onClick={() => onToggleModal(false)} label={'I am not ready'} />
        <DefaultButton onClick={moveToPreview} label={'GO!'} primary>
          <LocalFireDepartment />
        </DefaultButton>
      </DialogActions>
    </Dialog>
  );
};

export default PreviewPopup;
