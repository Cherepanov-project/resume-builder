import './SettingsPanel.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSellector } from '@/hooks/cvTemplateHooks';
import { closePanel } from '@/store/landingBuilder/settingsPanelSlice';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ContainerDIVSettings from '@/components/atoms/ContainerDIVSettings';
import InputUpdate from '../InputUpdate';
import ButtonsSettingsPanel from '@/components/atoms/ButtonsSettingsPanel';
import { IElementProps, ISettingsInputItem, T_BlockElement } from '@/types/landingBuilder';
import SliderSettings from '../SliderSettings';
import { Alert, Box, Typography } from '@mui/material';

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
    setElementsSize(prevElementsSize);
    dispatch(closePanel());
  };

  const { gridContainers } = useAppSellector((state) => state.layout);
  const activeElements: T_BlockElement[] = [];
  for (let i = 0; i < gridContainers.length; i++) {
    gridContainers[i].elements.activeElements.forEach((elem) => activeElements.push(elem));
  }
  const currentElement = activeElements.find((item) => item.layout.i === id);
  const props: IElementProps | undefined = currentElement?.props;
  const name = currentElement?.name;
  const size = currentElement?.props?.size;

  function findPropsName(props: IElementProps | undefined): ISettingsInputItem[] | undefined {
    if (name === 'RadioGroup') {
      return props?.RadioGroup;
    } else if (name === 'CheckboxGroup') {
      return props?.CheckboxGroup;
    } else if (name === 'SelectList') {
      return props?.SelectList;
    } else if (name === 'LayoutBlockSlider') {
      return props?.LayoutBlockSlider;
    } else if (name === 'MasonryGallery') {
      return props?.MasonryGallery;
    } else if (name === 'Avatars') {
      return props?.Avatars
    }
  }

  const propsName = findPropsName(props);

  const currentList = props && name ? propsName : [];

  const [itemsList, setItemsList] = useState(currentList || []);
  const [elementsSize, setElementsSize] = useState(size || 0);
  const [prevElementsSize, setPrevElementsSize] = useState(size || 1);
  const [style, setStyle] = useState({});
  const [prevList, setPrevList] = useState(currentList || []);

  useEffect(() => {
    setPrevList(currentList || []);
    setItemsList(currentList || []);
    setPrevElementsSize(size || 1);
    setElementsSize(size || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentElement, size]);

  function СheckingLabel(list: ISettingsInputItem[]) {
    if (name && name !== 'MasonryGallery') {
      const labelsList = list.map((item) => item.value);
      return new Set(labelsList).size !== labelsList.length;
    }
    return false;
  }

  const accessNames = ['RadioGroup', 'CheckboxGroup', 'SelectList', 'MasonryGallery', 'Avatars'];

  const isButtonsPanelVisible = accessNames.includes(name || '');

  const showSliderSettings = name === 'LayoutBlockSlider';

  return isShown ? (
    <Box ref={panelRef} className="list__wrap">
      <Box className={'list__title'}>
        <Typography variant="h3" className="title">
          Settings
        </Typography>
        <CloseIcon className="list__close-btn" onClick={handleClose} />
      </Box>

      <Alert severity="info" className="notification">
        Your data will be displayed after saving
      </Alert>

      {showSliderSettings && (
        <SliderSettings
          itemsList={itemsList}
          setItemsList={setItemsList}
          name={name || ''}
          elementsSize={elementsSize}
          setElementsSize={setElementsSize}
        />
      )}
      {isButtonsPanelVisible && (
        <InputUpdate
          itemsList={itemsList}
          setItemsList={setItemsList}
          name={name || ''}
          elementsSize={elementsSize}
          setElementsSize={setElementsSize}
        />
      )}

      <Box className="settings-panel">
        {type === 'section' && <ContainerDIVSettings setStyle={setStyle} />}
      </Box>

      <ButtonsSettingsPanel
        elementId={id}
        itemsList={itemsList}
        id={id}
        style={style}
        СheckingLabel={СheckingLabel}
        onClose={handleClose}
        elementsSize={elementsSize}
        setElementsSize={setElementsSize}
      />
    </Box>
  ) : null;
};

export default SettingsPanel;
