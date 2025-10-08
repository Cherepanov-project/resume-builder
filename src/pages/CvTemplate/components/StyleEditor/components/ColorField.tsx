import { Colorful } from "@uiw/react-color";
import { FieldProps } from "../type";

const ColorField: React.FC<FieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <h3>
        {label} : <span style={{ color: value as string }}>{value || "#000000"}</span>
      </h3>
      <Colorful
        color={(value as string) || "#000000"}
        disableAlpha
        onChange={(color) => onChange(color.hex)}
      />
    </div>
  );
};

export default ColorField;
