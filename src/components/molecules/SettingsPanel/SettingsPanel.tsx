import './SettingsPanel.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSellector } from '@/hooks/cvTemplateHooks';
import { closePanel } from '@/store/landingBuilder/settingsPanelSlice';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ContainerDIVSettings from '@/components/atoms/ContainerDIVSettings';
import InputUpdate from '../InputUpdate';
import ButtonsSettingsPanel from '@/components/atoms/ButtonsSettingsPanel';
import { SettingsInputItem } from '@/types/landingBuilder';
import { Alert } from 'antd';

const SettingsPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const isShown = useAppSellector((state) => state.settingsPanel.shown);
  const { type } = useAppSellector((state) => state.settingsPanel);
  const id = useAppSellector((state) => state.settingsPanel.sectionID);

  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const handleClick = (e: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  const handleClose = () => {
    dispatch(closePanel());
  };

  const { activeElements } = useAppSellector((state) => state.layout);
  const currentElement = activeElements.find((item) => item.layout.i === id);
  const props = currentElement?.props;
  const name = currentElement?.name;

  const currentList = props && name ? props[name] : [];

  const [itemsList, setItemsList] = useState(currentList || []);
  const [style, setStyle] = useState({});

  useEffect(() => setItemsList(currentList || []), [currentElement]);

  function СheckingLabel(list: SettingsInputItem[]) {
    const labelsList = list.map((item) => item.value);
    return new Set(labelsList).size !== labelsList.length;
  }

  return isShown ? (
    <div ref={panelRef} className="list__wrap">
      <div className={'list__title'}>
        <h3>Settings</h3>
        <CloseIcon className="list__close-btn" onClick={handleClose} />
      </div>
      <Alert
        message="Your data will be displayed after saving"
        type="info"
        showIcon
        className="notification"
      />
      <InputUpdate itemsList={itemsList} setItemsList={setItemsList} />
      <div className="settings-panel">
        {type === 'section' && <ContainerDIVSettings setStyle={setStyle} />}
      </div>
      <ButtonsSettingsPanel
        elementId={id}
        itemsList={itemsList}
        id={id}
        style={style}
        СheckingLabel={СheckingLabel}
      />
    </div>
  ) : null;
};

export default SettingsPanel;
