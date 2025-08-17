import Checkboxes from "../Checkboxes";
import { nanoid } from "nanoid";

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}
interface CheckboxGroupProps {
  props: {
    name: string;
    label: string;
    options?: CheckboxOption[];
    CheckboxGroup?: CheckboxOption[];
    onChange?: (value: string[]) => void;
  };
  layout: {
    i: string | null;
    x: number;
    y: number;
    w: number;
    h: number;
    direction?: "row" | "column";
    spacing?: number;
  };
}

const CheckboxGroup = ({ props, layout }: CheckboxGroupProps) => {
  console.log("CheckboxGroup props:", props);
  const checkboxList = props.options || props.CheckboxGroup || [];
  const checkboxProps = {
    Checkboxes: checkboxList.map((option) => ({
      id: nanoid(),
      value: option.label,
      checked: false,
    })),
    text: props.label,
    onChange: props.onChange,
  };

  const checkboxLayout = {
    i: nanoid(),
    direction: layout.direction || "column",
    spacing: layout.spacing || 8,
  };

  return <Checkboxes props={checkboxProps} layout={checkboxLayout} />;
};

export default CheckboxGroup;
