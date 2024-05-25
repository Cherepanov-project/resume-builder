import { useDispatch } from 'react-redux';

import { editRowDate } from '@store/landingBuilder/sectionsManagerSlice';

import { memo, useState } from 'react';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import Item from '@/components/atoms/StyledPaperItem';
import { getLabel } from '@/utils/labelUtils';
// import { nanoid } from 'nanoid';
// import { strict } from 'assert';

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

  let type: string = layoutElement.name || '';
  let title: string = layoutElement.props.title || '';
  let description: string = layoutElement.props.description || '';
  let text: string = layoutElement.props.text || '';
  let url: string = layoutElement.props.url || '';
  let imgUrl: string = layoutElement.props.imgUrl || '';
  let buttonText: string = layoutElement.props.buttonText || '';


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
          <form>
            <Stack>
              <Item>
                <FormControl>
                  <InputLabel id="type-label">Choose element type</InputLabel>
                  <Select
                    labelId="type-label"
                    sx={{ width: '220px' }}
                    value={type}
                    onChange={(e: SelectChangeEvent<string>) => {
                      type = e.target.value;
                      handleUpdate('type', e.target.value, col - 1);
                    }}
                    input={<OutlinedInput label="Choose element type" />}
                  >
                    {settingsOptionsValues.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Item>
              {type !== 'LayoutBlockImage' && type !== 'LayoutBlockVideoPlayer' && type !== 'LayoutBlockSlider' &&  type !== 'Accordion'  && <Item>
                <FormControl>
                  <TextField
                    label="Enter target text:"
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                      text = e.target.value;
                      handleUpdate('text', e.target.value, col - 1);
                    }}
                  />
                </FormControl>
              </Item>}
              {type === 'Accordion' ? (
                <Item>
                  <FormControl>
                    {accordion.map((item: string[], index: number) => (
                      <div key={index}>
                        <TextField
                          label={`Enter target accordion ${index + 1} title:`}
                          value={item[0]}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const updatedAccordion = [...accordion];
                            updatedAccordion[index] = [e.target.value, updatedAccordion[index][1]];
                            setAccordion(updatedAccordion);
                            handleUpdate('accordion', updatedAccordion, col - 1);
                          }}
                        />
                        <TextField
                          label={`Enter target accordion ${index + 1} description:`}
                          value={item[1]}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const updatedAccordion = [...accordion];
                            updatedAccordion[index] = [updatedAccordion[index][0], e.target.value];
                            setAccordion(updatedAccordion);
                            handleUpdate('accordion', updatedAccordion, col - 1);

                          }}
                        />
                      </div>
                    ))}
                    <button
                      onClick={(e: { preventDefault: () => void; }) => {
                        e.preventDefault();
                        const updatedAccordion: AccordionData = [...accordion, ['', '']];
                        setAccordion(updatedAccordion);
                        handleUpdate('accordion', updatedAccordion, col - 1);
                      }}
                    >
                      Add Item
                    </button>
                  </FormControl>
                </Item>
              ) : null}
              {type === 'CardItem' ? (
                <Item>
                  <FormControl>
                    <TextField
                      label="Enter target title:"
                      value={title}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        title = e.target.value;
                        handleUpdate('title', e.target.value, col - 1);
                      }}
                    />
                  </FormControl>
                </Item>
              ) : null}
              {type === 'CardItem' ? (
                <Item>
                  <FormControl>
                    <TextField
                      label="Enter target description:"
                      value={description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        description = e.target.value;
                        handleUpdate('description', e.target.value, col - 1);
                      }}
                    />
                  </FormControl>
                </Item>
              ) : null}
              {type === 'Anchor' ||
              type === 'Avatars' ||
              type === 'Image' ||
              type === 'Gallery'  ||
              type === 'VideoPlayer' ||
              type === 'Slider' ||
              type === 'SocialMediaIcon' ||
              type === 'CardItem' ||
              type === 'Logo'? (
                <Item>
                  <FormControl>
                    <TextField
                      label="Enter target URL:"
                      value={url}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        url = e.target.value;
                        handleUpdate('url', e.target.value, col - 1);
                      }}
                    />
                  </FormControl>
                </Item>
              ) : null}
              {type !== 'Image' && type !== 'VideoPlayer' && type !== 'Slider' && type === 'Logo' || type === 'SocialMediaIcon' || type === 'CardItem' ? (
                <Item>
                  <FormControl>
                    <TextField
                      label="Enter target image URL:"
                      value={imgUrl}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        imgUrl = e.target.value;
                        handleUpdate('imgUrl', e.target.value, col - 1);
                      }}
                    />
                  </FormControl>
                </Item>
              ) : null}
              {type === 'CardItem' ? (
                <Item>
                  <FormControl>
                    <TextField
                      label="Enter target button text:"
                      value={buttonText}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        buttonText = e.target.value;
                        handleUpdate('buttonText', e.target.value, col - 1);
                      }}
                    />
                  </FormControl>
                </Item>
              ) : null}
            </Stack>
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>Style Settings</AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Box>
  );
};

export const MemoizedElementSettings = memo(ElementSpecificSettings);
