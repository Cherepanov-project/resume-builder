import { setProps } from '@/store/landingBuilder/layoutSlice';
// import { setSectionStyle } from '@/store/landingBuilder/layoutSlice';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { IButtonsSettingsPanelProps } from '@/types/landingBuilder';
import { closePanel } from '@/store/landingBuilder/settingsPanelSlice';
import { useState } from 'react';
import { Alert } from 'antd';

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
        <Alert
          message="The fields have non-unique values"
          type="error"
          showIcon
          className="notification"
        />
      )}
      <div className="settings-panel__items__btns">
        <button
          className="settings-panel__items__btns__btn settings-panel__items__btns__btn--green"
          onClick={() => handleApply()}
        >
          Apply
        </button>
        <button
          className="settings-panel__items__btns__btn settings-panel__items__btns__btn--grey"
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ButtonsSettingsPanel;
