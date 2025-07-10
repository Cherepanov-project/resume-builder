import { FieldProps } from "../type";
import { fontFamily } from "../font";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const SelectField: React.FC<FieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <h3>
        {label} | {value || fontFamily[0].value}
      </h3>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={(value as string) || fontFamily[0].value}
          autoWidth
          onChange={(event: SelectChangeEvent) => onChange(event.target.value)}
        >
          {fontFamily.map((el, idx) => (
            <MenuItem key={idx} value={el.value}>
              {el.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectField;
