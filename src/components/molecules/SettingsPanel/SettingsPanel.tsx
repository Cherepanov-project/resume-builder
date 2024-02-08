import './SettingsPanel.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSellector } from '@/hooks/cvTemplateHooks';
import { closePanel } from '@/store/landingBuilder/settingsPanelSlice';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ContainerDIVSettings from '@/components/atoms/ContainerDIVSettings';
import InputUpdate from '../InputUpdate';
import ButtonsSettingsPanel from '@/components/atoms/ButtonsSettingsPanel';
import { IElementProps, ISettingsInputItem } from '@/types/landingBuilder';
import Alert from '@mui/material/Alert';
import SliderSettings from '../SliderSettings';

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
    setItemsList(prevList);
    dispatch(closePanel());
  };

  const { activeElements } = useAppSellector((state) => state.layout);
  const currentElement = activeElements.find((item) => item.layout.i === id);
  const props: IElementProps | undefined = currentElement?.props;
  const name = currentElement?.name;

  function findPropsName(props: IElementProps | undefined): ISettingsInputItem[] | undefined {
    if (name === 'RadioGroup') {
      return props?.RadioGroup;
    } else if (name === 'CheckboxGroup') {
      return props?.CheckboxGroup;
    } else if (name === 'SelectList') {
      return props?.SelectList;
    } else if (name === 'LayoutBlockSlider') {
      return props?.LayoutBlockSlider;
    }
  }

  const propsName = findPropsName(props);

  const currentList = props && name ? propsName : [];

  const [itemsList, setItemsList] = useState(currentList || []);
  const [style, setStyle] = useState({});
  const [prevList, setPrevList] = useState(currentList || []);

  useEffect(() => {
    setPrevList(currentList || []);
    setItemsList(currentList || []);
  }, [currentElement]);

  function СheckingLabel(list: ISettingsInputItem[]) {
    const labelsList = list.map((item) => item.value);
    return new Set(labelsList).size !== labelsList.length;
  }

  const accessNames = ['RadioGroup', 'CheckboxGroup', 'SelectList'];

  const isButtonsPanelVisible = accessNames.includes(name || '');

  const showSliderSettings = name === 'LayoutBlockSlider';

  return isShown ? (
    <div ref={panelRef} className="list__wrap">
      <div className={'list__title'}>
        <h3>Settings</h3>
        <CloseIcon className="list__close-btn" onClick={handleClose} />
      </div>

      <Alert severity="info" className="notification">
        Your data will be displayed after saving
      </Alert>

      {isButtonsPanelVisible && <InputUpdate itemsList={itemsList} setItemsList={setItemsList} />}
      {showSliderSettings && <SliderSettings itemsList={itemsList} setItemsList={setItemsList} />}

      <div className="settings-panel">
        {type === 'section' && <ContainerDIVSettings setStyle={setStyle} />}
      </div>

      <ButtonsSettingsPanel
        elementId={id}
        itemsList={itemsList}
        id={id}
        style={style}
        СheckingLabel={СheckingLabel}
        onClose={handleClose}
      />
    </div>
  ) : null;
};

export default SettingsPanel;
