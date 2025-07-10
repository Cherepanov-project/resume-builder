import { FieldProps } from "../type";
import { isNotANumber, isFiniteNumber } from "../utils";
import { FormControl, Input } from "@mui/material";

const InputField: React.FC<FieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <FormControl variant="standard">
        <h4>{label}</h4>
        <Input
          style={{ marginBottom: "20px" }}
          value={value.toString()}
          type={isFiniteNumber(value) ? "number" : "text"}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(
              isNotANumber(event.target.value) ? event.target.value : Number(event.target.value),
            )
          }
        />
      </FormControl>
    </div>
  );
};

export default InputField;
