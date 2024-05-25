import { useDispatch } from 'react-redux';

import { editRowDate } from '../../../store/landingBuilder/sectionsManagerSlice';

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
import { nanoid } from 'nanoid';
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
        const label = typeof value === 'string' ? getLabel(value) : getLabel(value[0][0]);
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

  // Надо добавить все варианты элементов из списка опций, wrapperStyle и textStyle должны меняться в зависимости от настроек стиля
  const getLabel = (blockValue: string) => {
    switch (blockValue) {
      default:
        return {
          value: '',
          label: '',
          url: '',
          title: {
            key: '',
            text: '',
            wrapperStyle: { display: 'block' },
            textStyle: { display: 'block' },
          },
        };
      case 'Avatarss':
        return {
          label: 'Images',
          value: 'Avatars',
          key: 'avatar',
          layout: { i: '', x: 0, y: 0, w: 1, h: 7 },
          url: url,
          props: {
            Avatars: [],
          },
          title: {
            key: 'avatar',
            text: '',
            wrapperStyle: { textAlign: 'center' },
            textStyle: { border: 'none', height: '100%', width: '100%' },
          },
        };
      case 'Accordion':
        return {
          label: 'Accordion',
          value: 'accordion',
          key: 'accordion',
          layout: { i: nanoid(), x: 0, y: 0, w: 2, h: 1 },
          title: {
            key: 'accordion',
            accordion: accordion,
            wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
            textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
      case 'CardItem':
        return {
          label: 'CardItem',
          value: 'cardItem',
          key: 'cardItem',
          layout: { i: '', x: 0, y: 0, w: 1, h: 8 },
          title: {
            key: 'cardItem',
            title: title,
            description: description,
            text: text,
            url: url,
            imgUrl: imgUrl,
            buttonText: buttonText,
            wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
            textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
      case 'Title':
        return {
          label: 'Title',
          value: 'Title',
          key: 'title',
          layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
          title: {
            key: 'title',
            text: text,
            wrapperStyle: { lineHeight: '20' },
            textStyle: { textAlign: 'center', fontSize: '18px' },
            // inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
          },
        };
      case 'Paragraph':
        return {
          label: 'Block Paragraph',
          value: 'Paragraph',
          key: 'paragraph',
          layout: { i: '', x: 0, y: 0, w: 2, h: 6 },
          title: {
            key: 'paragraph',
            text: text,
            wrapperStyle: { textAlign: 'center' },
            textStyle: { fontSize: '16px', margin: '0px' },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
      case 'Image':
        return {
          label: 'Images',
          value: 'Image',
          key: 'image',
          layout: { i: '', x: 0, y: 0, w: 1, h: 6 },
          props: {
            url: '',
          },
          title: {
            key: 'image',
            text: text,
            wrapperStyle: { textAlign: 'center' },
            textStyle: { border: 'none', height: '100%', width: '100%' },
          },
        };
      case 'ButtonBlock':
        return {
          label: 'Interactive',
          value: 'ButtonBlock',
          key: 'button',
          layout: { i: '', x: 0, y: 0, w: 1, h: 2 },
          title: {
            key: 'button',
            text: text,
            wrapperStyle: {
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            },
            textStyle: {
              fontSize: '16px',
              margin: '0px',
              width: '100%',
              height: '100%',
              backgroundColor: 'green',
            },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
      case 'Anchor':
        return {
          label: 'Navigation',
          value: 'Anchor',
          key: 'anchor',
          layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
          title: {
            key: 'anchor',
            text: text,
            url: url,
            wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
            textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
      case 'Logo':
        return {
          label: 'Logo',
          value: 'Logo',
          key: 'logo',
          layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
          title: {
            key: 'logo',
            text: text,
            url: url,
            imgUrl: imgUrl,
            wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
            textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
      case 'SocialMediaIcon':
        return {
          label: 'SocialMediaIcon',
          value: 'SocialMediaIcon',
          key: 'smIcon',
          layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
          title: {
            key: 'smIcon',
            title: title,
            text: text,
            url: url,
            imgUrl: imgUrl,
            wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
            textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
      case 'RatingSystem':
        return {
          label: 'Interactive',
          value: 'RatingSystem',
          key: 'rating',
          columns: 2,
          layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
          children: [],
          title: {
            key: 'rating',
            value: '0',
            text: false,
          },
        };
      case 'Tooltip':
        return {
          label: 'Interactive',
          value: 'Tooltip',
          key: 'tooltip',
          layout: { i: '', x: 0, y: 0, w: 1, h: 2 },
          children: [],
          title: {
            key: 'tooltip',
            value: '0',
            text: false,
          },
        };
      case 'Checkboxes':
        return {
          label: 'CheckBoxes',
          value: 'Checkboxes',
          key: 'checkbox',
          layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
          children: [],
          title: {
            key: 'checkbox',
            value: '0',
            text: false,
          },
          props: {
            Checkboxes: [],
          },
        };
      case 'RadioButtons':
        return {
          label: 'CheckBoxes',
          value: 'RadioButtons',
          key: 'radiobox',
          layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
          children: [],
          title: {
            key: 'radiobox',
            value: '0',
            text: false,
          },
          props: {
            RadioButtons: [],
          },
        };
      case 'MultiToggle':
        return {
          label: 'CheckBoxes',
          value: 'MultiToggle',
          key: 'toggleButtons',
          layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
          children: [],
          title: {
            key: 'toggleButtons',
            value: '0',
            text: false,
          },
      };
      case 'HeaderTitle':
        return {
          label: 'Text Blocks',
          value: 'HeaderTitle',
          key: 'h1title',
          layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
          children: [],
          title: {
            key: 'h1title',
            value: '0',
            text: false,
          },
        };
      case 'Gallery':
        return {
          label: 'Images',
          value: 'Gallery',
          key: 'gallery',
          layout: { i: '', x: 0, y: 0, w: 2, h: 13 },
          children: [],
          url: url,
          title: {
            key: 'gallery',
            value: '0',
            text: '',
          },
          props: {
            Gallery: [],
          },
        };
      case 'VideoPlayer':
        return {
          label: 'Media',
          value: 'VideoPlayer',
          key: 'video',
          layout: { i: '', x: 0, y: 0, w: 3, h: 10 },
          children: [],
          title: {
            key: 'video',
            value: '0',
            text: false,
          },
          props: {
            url: '',
            text: '',
          }
        };
      case 'DropdownList':
        return {
          label: 'DropdownList',
          value: 'DropdownList',
          key: 'selectlist',
          layout: { i: '', x: 0, y: 0, w: 2, h: 2 },
          children: [],
          title: {
            key: 'selectlist',
            value: '0',
            text: false,
          },
          props: {
            DropdownList: [],
          },
        };
      case 'ModalWindow':
        return {
          label: 'Interactive',
          value: 'ModalWindow',
          key: 'modal',
          layout: { i: '', x: 0, y: 0, w: 1.5, h: 3 },
          children: [],
          title: {
            key: 'modal',
            value: '0',
            text: false,
          },
          props: {
            text: ['Click here to open modal', 'Here is your modal title', 'Wow! You opened modal.'],
            wrapperStyle: { height: 'calc(100% - 38px)' },
            textStyle: { width: '100%', height: '100%', border: 'none' },
            style: { backgroundColor: '', color: '', border: '', text: '' },
          }
        };
      case 'Slider':
        return {
          label: 'Media Elements',
          value: 'Slider',
          key: 'slider',
          children: [],
          title: {
            key: 'slider',
            value: '0',
            text: false,
          },
          props: {
            text: '',
            Slider: [],
            wrapperStyle: { height: '100%' },
            textStyle: { width: '100%', height: '100%', border: 'none' },
            style: { backgroundColor: '', color: '', border: '', text: '' },
          },
          layout: { i: '', x: 0, y: 0, w: 3, h: 15 },
        };
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
