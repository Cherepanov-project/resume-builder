import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  TextField,
  SelectChangeEvent,
} from '@mui/material'
import Item from '@atoms/StyledPaperItem';
import { nanoid } from 'nanoid';

type AccordionData = Array<[string, string]>;


const ElementSpecificSettingsForm = ({
  type, 
  text, 
  title, 
  description, 
  url, 
  imgUrl, 
  buttonText, 
  accordion, 
  settingsOptionsValues, 
  setAccordion, 
  handleUpdate, 
  col, 
  SelectList,
  setSelectList,
}) => {
  return (
    <form >
      <Stack >
        <Item>
          <FormControl>
            <InputLabel id="type-label">Choose element type</InputLabel>
            <Select 
              labelId="type-label"
              sx={{ width: '220px' }}
              value={type}
              onChange={(e: SelectChangeEvent<string>) => {
                type = e.target.value;
                console.log(e.target.value); // Проверка
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
        {type !== 'LayoutBlockImage' && type !== 'LayoutBlockVideoPlayer' && type !== 'LayoutBlockSlider' && type !== 'Accordion' && type !== 'CheckboxGroup' && type !== 'DropdownList' && type !==  'Slider' &&
          <Item >
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
                    style={{marginBottom:'15px'}}
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
                    style={{marginBottom:'15px'}}
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
        {type === 'DropdownList' || type ===  'Slider'|| type === 'CheckboxGroup' ? (
          <Item>
            <FormControl>
              {SelectList.map((item: string[], index: number) => (
                <div key={index}>
                  <TextField 
                    style={{marginBottom:'15px'}}
                    label={`Enter ${type.toLowerCase()} ${type==='Slider' ? 'image url':'item'} ${index + 1}:`}
                    value={item[0]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const updatedList = [...SelectList];
                      updatedList[index] = {id: nanoid(), value: e.target.value}
                      setSelectList(updatedList);
                      handleUpdate(type, updatedList, col - 1);
                    }}
                  />
                </div>
              ))}
              <div>
              <button
                onClick={(e: { preventDefault: () => void; }) => {
                  e.preventDefault();
                  const updatedList = [...SelectList, {id: nanoid(), value:'Text'}];
                  setSelectList(updatedList);
                  handleUpdate(type, updatedList, col - 1);
                }}
              >
                Add Item
              </button>
              <button
                onClick={(e: { preventDefault: () => void; }) => {
                  e.preventDefault();
                  const updatedList = [...SelectList];
                  if(updatedList.length > 1){
                    updatedList.pop()
                  }
                  setSelectList(updatedList);
                  handleUpdate(type, updatedList, col - 1);
                }}
              >
                Delete Item
              </button>
              </div>
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
        type === 'Gallery' ||
        type === 'VideoPlayer' ||
        type === 'SocialMediaIcon' ||
        type === 'CardItem' ||
        type === 'Logo' ? (
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
  );
};

export default ElementSpecificSettingsForm;
