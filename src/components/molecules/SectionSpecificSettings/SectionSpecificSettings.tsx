import Item from '@atoms/StyledPaperItem';
import {
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

const SectionSpecificSettings = ({ type, setType, name, setName }) => {
  return (
    <Box sx={{ m: '15px' }}>
      <Stack>
        <Item>
          <FormControl>
            <InputLabel id="section-label" sx={{ zIndex: '0' }}>
              Choose section type:
            </InputLabel>
            <Select
              labelId="section-label"
              value={type}
              onChange={(e: SelectChangeEvent) => {
                setType(e.target.value);
              }}
              sx={{ width: '220px' }}
              input={<OutlinedInput label="Choose section type" />}
            >
              <MenuItem value="Headers">Headers</MenuItem>
              <MenuItem value="Intro">Intro</MenuItem>
              <MenuItem value="Articles">Articles</MenuItem>
              <MenuItem value="Contents">Contents</MenuItem>
              <MenuItem value="Features">Features</MenuItem>
              <MenuItem value="Footers">Footers</MenuItem>
            </Select>
          </FormControl>
        </Item>
        <Item>
          <FormControl>
            <TextField
              sx={{ zIndex: '0' }}
              id="manager-container__workspace__title-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
              value={name}
              label="Choose section name:"
              required
            />
          </FormControl>
        </Item>
      </Stack>
    </Box>
  );
};

export default SectionSpecificSettings;
