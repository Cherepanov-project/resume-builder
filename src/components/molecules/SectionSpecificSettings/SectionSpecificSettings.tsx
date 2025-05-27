import Item from "@atoms/StyledPaperItem";
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
} from "@mui/material";

interface SectionSpecificSettingsType {
  type: string;
  setType: (value: string) => void;
  name: string;
  setName: (value: string) => void;
}

const SectionSpecificSettings: React.FC<SectionSpecificSettingsType> = ({
  type,
  setType,
  name,
  setName,
}) => {
  return (
    <Box sx={{ m: "15px" }}>
      <Stack>
        <Item sx={{ background: "#333" }}>
          <FormControl>
            <InputLabel
              id="section-label"
              sx={{
                zIndex: "1",
                color: "#999",
                "&.Mui-focused": {
                  color: "#999",
                },
              }}
            >
              Choose section type:
            </InputLabel>
            <Select
              labelId="section-label"
              value={type}
              onChange={(e: SelectChangeEvent) => {
                setType(e.target.value);
              }}
              sx={{
                width: "220px",
                color: "#999",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#999",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#aaa",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#999",
                },
              }}
              input={<OutlinedInput label="Choose section type" />}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#444",
                    color: "#999",
                  },
                },
              }}
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
        <Item sx={{ background: "#333" }}>
          <FormControl>
            <TextField
              sx={{
                zIndex: "0",
                input: { color: "#999" },
                "& label": { color: "#999" },
                "& label.Mui-focused": { color: "#999" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#999",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#999",
                  },
                },
              }}
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
