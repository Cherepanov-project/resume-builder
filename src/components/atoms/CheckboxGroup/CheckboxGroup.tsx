import Checkboxes from "../Checkboxes";
import { nanoid } from 'nanoid';

interface CheckboxGroupProps {
  props: {
    name: string;
    label: string;
    options?: Array<{
      value: string;
      label: string;
    }>;
    CheckboxGroup?: Array<{
      value: string;
      label: string;
    }>;
    onChange?: (value: string[]) => void;
  };
  layout: {
    direction?: 'row' | 'column';
    spacing?: number;
  };
}

const CheckboxGroup = ({ props, layout }: CheckboxGroupProps) => {
  console.log('CheckboxGroup props:', props);
  const checkboxList = props.options || props.CheckboxGroup || [];
  const checkboxProps = {
    Checkboxes: checkboxList.map(option => ({
      id: nanoid(),
      value: option.value,
      label: option.label,
      checked: false,
    })),
    text: props.label,
    onChange: props.onChange,
  };

  const checkboxLayout = {
    i: nanoid(), 
    direction: layout.direction || 'column',
    spacing: layout.spacing || 8,
  };

  return (
    <Checkboxes 
      props={checkboxProps} 
      layout={checkboxLayout}
    />
  );
};

export default CheckboxGroup;