import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import DefaultButton from '@atoms/DefaultButton';
import { LocalFireDepartment } from '@mui/icons-material';

type Props = {
  isModalOpen: boolean;
  onToggleModal: (data: boolean) => void;
};
const PreviewPopup = ({ isModalOpen, onToggleModal }: Props) => {
  const moveToPreview = async () => {
    await onToggleModal(false);
    let link: HTMLAnchorElement | null = document.createElement('a');
    link.rel = 'noopener noreferrer';
    link.href = '/landing-preview';
    link.target = '_blank';
    link.click();
    link = null;
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
