import { setProps } from "@/store/landingBuilder/layoutSlice";
import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { IButtonsSettingsPanelProps } from "@/types/landingBuilder";
import { closePanel } from "@/store/landingBuilder/settingsPanelSlice";
import { useState } from "react";
import { Alert, Stack, Button, Box } from "@mui/material";

const ButtonsSettingsPanel = ({
  elementId,
  itemsList,
  СheckingLabel,
  onClose,
  elementsSize,
  style,
  setElementsSize,
}: IButtonsSettingsPanelProps) => {
  const dispatch = useAppDispatch();

  const [error, setError] = useState(false);

  const objForStore = {
    id: elementId,
    values: itemsList,
    size: elementsSize,
    style: style ? style : {},
  };

  console.log(objForStore);
  const handleApply = () => {
    const check = СheckingLabel(itemsList);

    if (!check) {
      if (elementsSize === 0) {
        setElementsSize(1);
      }
      setError(false);
      dispatch(setProps(objForStore));
      dispatch(closePanel());
    } else {
      setError(true);
    }
  };

  return (
    <Box className="settings-panel__items">
      {error && (
        <Alert severity="error" className="notificationError">
          The fields have non-unique values
        </Alert>
      )}

      <Stack direction="row" className="settings-panel__items__btns">
        <Button
          variant="contained"
          className="settings-panel__items__btns__btn settings-panel__items__btns__btn--green"
          onClick={() => handleApply()}
        >
          Apply
        </Button>
        <Button
          variant="contained"
          className="settings-panel__items__btns__btn settings-panel__items__btns__btn--grey"
          onClick={() => onClose()}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default ButtonsSettingsPanel;
