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
  useTheme,
} from "@mui/material";

interface SectionSpecificSettingsType {
  type: string;
  setType: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  isEditing?: boolean;
}

const SectionSpecificSettings: React.FC<SectionSpecificSettingsType> = ({
  type,
  setType,
  name,
  setName,
}) => {
  const theme = useTheme();
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
                  borderColor: theme.custom.colorWhiteGray,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#aaa",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.custom.colorWhiteGray,
                },
              }}
              input={<OutlinedInput label="Choose section type" />}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: theme.custom.colorWhiteGray,
                    color: theme.custom.colorWhiteGray,
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
                input: { color: theme.custom.colorWhiteGray },
                "& label": { color: theme.custom.colorWhiteGray },
                "& label.Mui-focused": { color: theme.custom.colorWhiteGray },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.custom.colorWhiteGray,
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.custom.colorWhiteGray,
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
