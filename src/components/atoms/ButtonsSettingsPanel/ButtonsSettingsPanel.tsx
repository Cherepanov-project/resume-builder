import { setProps } from '@/store/landingBuilder/layoutSlice';
// import { setSectionStyle } from '@/store/landingBuilder/layoutSlice';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { IButtonsSettingsPanelProps } from '@/types/landingBuilder';
import { closePanel } from '@/store/landingBuilder/settingsPanelSlice';
import { useState } from 'react';
import { Alert, Stack, Button } from '@mui/material';

const ButtonsSettingsPanel = ({
  elementId,
  itemsList,
  СheckingLabel,
  onClose, // id, style
}: IButtonsSettingsPanelProps) => {
  const dispatch = useAppDispatch();

  const [error, setError] = useState(false);

  const objForStore = {
    id: elementId,
    values: itemsList,
  };

  const handleApply = () => {
    const check = СheckingLabel(itemsList);

    if (!check) {
      setError(false);
      dispatch(setProps(objForStore));
      dispatch(closePanel());
    } else {
      setError(true);
    }
    // dispatch(setSectionStyle({ i: id, style }));
  };

  return (
    <div className="settings-panel__items">
      {error && (
        <Alert severity="error" className="notificationError">
          The fields have non-unique values
        </Alert>
      )}

      <Stack direction="row" className="settings-panel__items__btns">
        <Button
          variant="contained"
          className="settings-panel__items__btns__btn"
          sx={{
            backgroundColor: '#2dc08d',
            '&:hover': { opacity: 0.6, backgroundColor: '#2dc08d' },
          }}
          onClick={() => handleApply()}
        >
          Apply
        </Button>
        <Button
          variant="contained"
          className="settings-panel__items__btns__btn"
          sx={{
            backgroundColor: 'grey',
            '&:hover': { opacity: 0.6, backgroundColor: 'grey' },
          }}
          onClick={() => onClose()}
        >
          Cancel
        </Button>
      </Stack>
    </div>
  );
};

export default ButtonsSettingsPanel;
