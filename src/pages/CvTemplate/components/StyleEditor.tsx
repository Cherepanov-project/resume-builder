import React, { useMemo } from 'react';
import { FormControl, Input, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Colorful } from '@uiw/react-color';

interface FontOption {
  value: string;
  label: string;
}

const fontFamily: FontOption[] = [
  {
    value: 'Courier',
    label: 'Courier',
  },
  {
    value: 'Courier-Bold',
    label: 'Courier-Bold',
  },
  {
    value: 'Courier-Oblique',
    label: 'Courier-Oblique',
  },
  {
    value: 'Courier-BoldOblique',
    label: 'Courier-BoldOblique',
  },
  {
    value: 'Helvetica',
    label: 'Helvetica',
  },
  {
    value: 'Helvetica-Bold',
    label: 'Helvetica-Bold',
  },
  {
    value: 'Helvetica-Oblique',
    label: 'Helvetica-Oblique',
  },
  {
    value: 'Helvetica-BoldOblique',
    label: 'Helvetica-BoldOblique',
  },
  {
    value: 'Times-Roman',
    label: 'Times-Roman',
  },
  {
    value: 'Times-Bold',
    label: 'Times-Bold',
  },
  {
    value: 'Times-Italic',
    label: 'Times-Italic',
  },
  {
    value: 'Times-BoldItalic',
    label: 'Times-BoldItalic',
  },
];


interface StyleObject {
  [key: string]: string | number | StyleObject;
}

interface ComponentStyleType {
  [key: string]: string | number | StyleObject;
}

interface ComponentProps {
  style: ComponentStyleType;
  [key: string]: unknown;
}

interface StyleEditorProps {
  componentProps: ComponentProps;
  updateParent: () => void;
  setNewStyleValue: (place: string, el: string, value: string | number) => void;
  place?: string;
  Component: React.ComponentType<ComponentProps>;
  isComplex?: boolean;
  propName: string;
}

interface ContainerProps {
  children: React.ReactNode;
}

interface FieldProps {
  place_: string;
  subKey?: string;
  value: string | number;
  label: string;
  onChange: (value: string | number) => void;
}
type StyleComponentsType = {
  width: React.FC<FieldProps>;
  height: React.FC<FieldProps>;
  marginBottom: React.FC<FieldProps>;
  borderRadius: React.FC<FieldProps>;
  color: React.FC<FieldProps>;
  background: React.FC<FieldProps>;
  fontFamily: React.FC<FieldProps>;
  fontSize: React.FC<FieldProps>;
  [key: string]: React.FC<FieldProps> | undefined;
};

const isFiniteNumber = (value: unknown): boolean => {
  return typeof value === 'number' && value !== Infinity && value !== -Infinity && value === value;
};

const isNotANumber = (value: unknown): boolean => {
  return value !== value || value === '' || typeof value !== 'number' && isNaN(parseFloat(String(value)));
};

const ColorField: React.FC<FieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <h3>
        {label} : <span style={{ color: value as string }}>{value || '#000000'}</span>
      </h3>
      <Colorful
        color={value as string || '#000000'}
        disableAlpha
        onChange={(color) => onChange(color.hex)}
      />
    </div>
  );
};

const InputField: React.FC<FieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <FormControl variant="standard">
        <h4>{label}</h4>
        <Input
          style={{ marginBottom: '20px' }}
          value={value.toString()}
          type={isFiniteNumber(value) ? 'number' : 'text'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(
              isNotANumber(event.target.value)
                ? event.target.value
                : Number(event.target.value)
            )
          }
        />
      </FormControl>
    </div>
  );
};

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
          value={value as string || fontFamily[0].value}
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

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: 5,
        padding: '10px',
        margin: '10px 0',
      }}
    >
      {children}
    </div>
  );
};

const StyleEditor_v2: React.FC<StyleEditorProps> = ({
  componentProps,
  updateParent,
  setNewStyleValue,
  place = '',
  Component,
  isComplex = false,
}) => {
  const handleChange = (
    value: string | number,
    el: string,
    place_: string | null = null
  ): void => {
    isComplex ? setNewStyleValue(place_ || '', el, value) : setNewStyleValue(place, el, value);
    updateParent();
  };

  const getStyleValue = (place_: string, subKey: string = ''): { value: string | number, label: string } => {
    if (isComplex && componentProps.style[place_]) {
      const styleValue = componentProps.style[place_];
      if (typeof styleValue === 'object' && styleValue !== null && subKey in styleValue) {
        const nestedValue = styleValue[subKey];
        if (typeof nestedValue === 'string' || typeof nestedValue === 'number') {
          return {
            value: nestedValue,
            label: `${place_} - ${subKey}`,
          };
        }
      }
    } else {
      const styleValue = componentProps.style[place_];
      if (typeof styleValue === 'string' || typeof styleValue === 'number') {
        return {
          value: styleValue,
          label: place_,
        };
      }
    }
    return {
      value: '',
      label: isComplex ? `${place_} - ${subKey}` : place_,
    };
  };

  const styleComponents = useMemo<StyleComponentsType>(() => ({
    width: InputField,
    height: InputField,
    marginBottom: InputField,
    borderRadius: InputField,
    color: ColorField,
    background: ColorField,
    fontFamily: SelectField,
    fontSize: InputField,
  }), []);

  const renderData = useMemo(() => {
    const result: React.ReactNode[] = [];
    
    if (isComplex) {
      const keys = Object.keys(componentProps.style);
      keys.forEach((el) => {
        const styleValue = componentProps.style[el];
        if (typeof styleValue === 'object' && styleValue !== null) {
          const subElements = Object.keys(styleValue).map((subElement, id) => {
            const StyleComponent = styleComponents[subElement];
            if (!StyleComponent || styleValue[subElement] === undefined) return null;
            
            const { value, label } = getStyleValue(el, subElement);
            
            return (
              <Container key={el + String(id)}>
                <StyleComponent 
                  place_={el} 
                  subKey={subElement} 
                  value={value} 
                  label={label}
                  onChange={(newValue: string | number) => handleChange(newValue, subElement, el)}
                />
              </Container>
            );
          }).filter(Boolean);
          
          result.push(...subElements);
        }
      });
    } else {
      const elements = Object.keys(componentProps.style || {}).map((el, id) => {
        const StyleComponent = styleComponents[el];
        if (!StyleComponent || componentProps.style[el] === undefined) return null;
        
        const { value, label } = getStyleValue(el);
        
        return (
          <Container key={el + String(id)}>
            <StyleComponent 
              place_={el} 
              value={value} 
              label={label}
              onChange={(newValue: string | number) => handleChange(newValue, el)}
            />
          </Container>
        );
      }).filter(Boolean);
      
      result.push(...elements);
    }
    
    return result;
  }, [componentProps.style, isComplex, styleComponents, handleChange]);

  return (
    <div style={{ minWidth: '500px' }}>
      <fieldset style={{ backgroundColor: 'rgba(0,0,0,.15)' }}>
        <legend>preview</legend>
        <Component {...componentProps} />
      </fieldset>
      {renderData}
    </div>
  );
};

export default StyleEditor_v2;