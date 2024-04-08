import { useDispatch } from 'react-redux';

import { editRowDate } from '../../../store/landingBuilder/sectionsManagerSlice';

import { memo } from 'react';
import { useAppSellector } from '@/hooks/cvTemplateHooks';
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

const ElementSpecificSettings = () => {
  const layoutDate = useAppSellector((state) => state.sectionsManager.layoutDate);
  const id: string = useAppSellector((state) => state.sectionsManager.curId);

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

  let type: string = layoutElement.name || '';
  let text: string = layoutElement.props.text || '';
  let url: string = layoutElement.props.url || '';

  const dispatch = useDispatch();

  const settingsOptionsValues = [
    'Avatars',
    'MasonryGallery',
    'BasicRating',
    'BasicTooltip',
    'CheckboxGroup',
    'RadioGroup',
    'ToggleButtonsMultiple',
    'LayoutBlockTitle',
    'LayoutBlockParagraph',
    'LayoutBlockImage',
    'LayoutBlockButton',
    'LayoutBlockAnchor',
    'LayoutBlockSlider',
    'LayoutBlockVideoPlayer',
    'LayoutBlockModal',
    'SelectList',
    'TitleH1',
  ];

  const handleUpdate = (type: string, value: string, i: number): void => {
    console.log('f', type, value);
    const newValue = JSON.parse(JSON.stringify(layoutRow));
    switch (type) {
      case 'type': {
        const label = getLabel(value);
        newValue[i].name = value;
        newValue[i].type = label.label;
        newValue[i].props.key = label.key;
        newValue[i].layout = label.layout;
        if (label.value) {
          newValue[i].props.value = label.title.value;
        }
        if (label.url) newValue[i].url = label.url;
        // console.log(row, newValue);
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'url': {
        newValue[i].props.url = value;
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'text': {
        newValue[i].props.text = value;
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
      case 'Avatars':
        return {
          label: 'Avatar & Images',
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
      case 'LayoutBlockTitle':
        return {
          label: 'Block Title',
          value: 'LayoutBlockTitle',
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
      case 'LayoutBlockParagraph':
        return {
          label: 'Block Paragraph',
          value: 'LayoutBlockParagraph',
          key: 'paragraph',
          layout: { i: '', x: 0, y: 0, w: 1, h: 6 },
          title: {
            key: 'paragraph',
            text: text,
            wrapperStyle: { textAlign: 'center' },
            textStyle: { fontSize: '16px', margin: '0px' },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
      case 'LayoutBlockImage':
        return {
          label: 'Avatar & Images',
          value: 'LayoutBlockImage',
          key: 'image',
          layout: { i: null, x: 0, y: 0, w: 1, h: 6 },
          title: {
            key: 'image',
            text: text,
            wrapperStyle: { textAlign: 'center' },
            textStyle: { border: 'none', height: '100%', width: '100%' },
          },
        };
      case 'LayoutBlockButton':
        return {
          label: 'Simple Blocks',
          value: 'LayoutBlockButton',
          key: 'button',
          layout: { i: null, x: 0, y: 0, w: 1, h: 2 },
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
      case 'LayoutBlockAnchor':
        return {
          label: 'Block Anchor',
          value: 'LayoutBlockAnchor',
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
      case 'BasicRating':
        return {
          label: 'Simple Blocks',
          value: 'BasicRating',
          key: 'rating',
          layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
          children: [],
          title: {
            key: 'rating',
            value: '0',
            text: false,
          },
        };
      case 'BasicTooltip':
        return {
          label: 'Simple Blocks',
          value: 'BasicTooltip',
          key: 'tooltip',
          layout: { i: '', x: 0, y: 0, w: 1, h: 2 },
          children: [],
          title: {
            key: 'tooltip',
            value: '0',
            text: false,
          },
        };
      case 'CheckboxGroup':
        return {
          label: 'CheckBoxes',
          value: 'CheckboxGroup',
          key: 'checkbox',
          layout: { i: null, x: 0, y: 0, w: 1, h: 3 },
          children: [],
          title: {
            key: 'checkbox',
            value: '0',
            text: false,
          },
          props: {
            CheckboxGroup: [],
          },
        };
      case 'RadioGroup':
        return {
          label: 'CheckBoxes',
          value: 'RadioGroup',
          key: 'radiobox',
          layout: { i: null, x: 0, y: 0, w: 1, h: 3 },
          children: [],
          title: {
            key: 'radiobox',
            value: '0',
            text: false,
          },
          props: {
            RadioGroup: [],
          },
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
              {type === 'LayoutBlockAnchor' || type === 'Avatars' || type === 'LayoutBlockImage' ? (
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
              {type !== 'LayoutBlockImage' && (
                <Item>
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
                </Item>
              )}
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
