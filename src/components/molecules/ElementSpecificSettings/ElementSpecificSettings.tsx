import { useDispatch } from 'react-redux';

import { editRowDate } from '@store/landingBuilder/sectionsManagerSlice';

import { memo, useState } from 'react';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import Item from '@atoms/StyledPaperItem';
import ElementSpecificSettingsForm from '@molecules/ElementSpecificSettingsForm'
import ElementSpecificStylesForm from '../ElementSpecificStylesForm';
import { getLabel } from '@/utils/labelUtils';

const ElementSpecificSettings = () => {
  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const id: string = useTypedSelector((state) => state.sectionsManager.curId);
  let [r, w] = String(id).split('');
  let row: number = Number(r);
  let col: number = Number(w);
  let layoutRow = layoutDate[row];
  if (!layoutRow) {
    layoutRow = layoutDate[1];
    r = '1';
    row = 1;
  }
  let layoutElement = layoutRow[col - 1];
  if (!layoutElement) {
    layoutElement = layoutRow[0];
    w = '1';
    col = 1;
  }
  type AccordionData = Array<[string, string]>;
  const type: string = layoutElement.name || '';
  const title: string = layoutElement.props.title || '';
  const description: string = layoutElement.props.description || '';
  const text: string = layoutElement.props.text || '';
  const url: string = layoutElement.props.url || '';
  const imgUrl: string = layoutElement.props.imgUrl || '';
  const buttonText: string = layoutElement.props.buttonText || '';

  const dispatch = useDispatch();

  const settingsOptionsValues = [
    'Accordion',
    'Avatars',
    'CardItem',
    'CheckboxGroup',
    'LayoutBlockModal',
    'Logo',
    'SelectList',
    'SocialMediaIcon',
    'TitleH1',
    'Gallery',
    'RatingSystem',
    'Tooltip',
    'Checkboxes',
    'RadioButtons',
    'MultiToggle',
    'Title',
    'Paragraph',
    'Image',
    'ButtonBlock',
    'Anchor',
    'Slider',
    'VideoPlayer',
    'ModalWindow',
    'DropdownList',
    'HeaderTitle',
  ];

  const [accordion, setAccordion] = useState<AccordionData>(layoutElement.props.accordion || []);

  const handleUpdate = (type: string, value: string | AccordionData, i: number): void => {
    const newValue = JSON.parse(JSON.stringify(layoutRow));
    console.log('handleUpdate', newValue);

    const names = ['url', 'title', 'text', 'description', 'imgUrl', 'buttonText']
    switch (type) {
      case 'type': {
        const label = typeof value === 'string' ? getLabel(value, url, title, description, text, imgUrl, buttonText, accordion) : getLabel(value[0][0], url, title, description, text, imgUrl, buttonText, accordion);
        newValue[i].name = value;
        newValue[i].type = label.label;
        newValue[i].props.key = label.key;
        newValue[i].layout = label.layout;
        if (label.value) {
          newValue[i].props.value = label.title.value;
        }
        if (label.url) newValue[i].url = label.url;
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case names.includes(type) ? type : '' : {
        newValue[i].props[type] = value;
        dispatch(editRowDate({ row, date: newValue }));
        break
      }
      case 'accordion': {
        newValue[i].props.accordion = value;
        newValue[i].layout = {...newValue[i].layout, h: accordion.length === 0 ? 2 : 1.85*(accordion.length)}
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'style':{
        newValue[i].props.style = Object.assign(newValue[i].props.style, value);
        console.log('Обновили стили',newValue);
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      default: {
        console.log('No case found');
      }
    }
  };

  return (
    <Box>
      <Item>
        Current element: <br /> {`Row ${r}`} {`Column ${w}`}
      </Item>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>Configuration Settings</AccordionSummary>
        <AccordionDetails>
          <ElementSpecificSettingsForm
            type={type}
            text={text}
            title={title}
            description={description}
            url={url}
            imgUrl={imgUrl}
            buttonText={buttonText}
            accordion={accordion}
            settingsOptionsValues={settingsOptionsValues}
            handleUpdate={handleUpdate}
            setAccordion={setAccordion}
            col={col}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>Style Settings</AccordionSummary>
        <AccordionDetails>
        <ElementSpecificStylesForm
            handleUpdate={handleUpdate}
            col={col}></ElementSpecificStylesForm>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export const MemoizedElementSettings = memo(ElementSpecificSettings);
