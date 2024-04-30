import React, {  useState, useEffect } from 'react';
import {  FormControl, Input, MenuItem, Select , SelectChangeEvent  } from '@mui/material';
import { Colorful } from '@uiw/react-color';


const fontFamily = [
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


const StyleEditor_v2 = ({
  componentProps,
  updateParent,
  setNewStyleValue,
  place = '',
  Component,
  isComplex = false,
  propName,
}) => {


  const handleChange = (setDataFunc, value, el, place_ = null) => {
    setDataFunc((prevValue) => ({
      ...prevValue,
      value: value,
    }));
    isComplex ? setNewStyleValue(place_, el, value) : setNewStyleValue(place, el, value);
    updateParent();
  };

  const Container = ({ children }) => {
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

  const ColorFieldWithState = ({ place_, subKey = '' }) => {
    const [data, setData] = useState({
      label: '',
      value: '',
    });
    useEffect(() => {
      if (isComplex) {
        setData({
          value: componentProps.style[place_][subKey] || '',
          label: `${place_} - ${subKey}`,
        });
      } else {
        setData({ value: componentProps.style[place_] || '', label: place_ });
      }
    }, []);

    return (
      <div>
        <h3>
          {data.label} : <span style={{ color: data.value }}>{data.value || '#000000'}</span>
        </h3>
        <Colorful
          color={data.value || '#000000'}
          disableAlpha
          onChange={(color) =>
            isComplex
              ? handleChange(setData, color.hex, subKey, place_)
              : handleChange(setData, color.hex, place_, null)
          }
        />
      </div>
    );
  };

  const InputFieldWithState = ({ place_, subKey = '' }) => {
    const [data, setData] = useState({
      label: '',
      value: '',
    });

    useEffect(() => {
      if (isComplex) {
        setData({
          value: componentProps.style[place_][subKey] || '',
          label: `${place_} - ${subKey}`,
        });
      } else {
        setData({ value: componentProps.style[place_] || '', label: place_ });
      }
    }, []);

    return (
      <div>
        <FormControl variant="standard">
          <h4>{data.label}</h4>

          <Input
            style={{ marginBottom: '20px' }}
            value={data.value}
            type={Number.isFinite(data.value) ? 'number' : 'text'}
            onChange={(event) =>
              isComplex
                ? handleChange(
                    setData,
                    Number.isNaN(Number(event.target.value))
                      ? event.target.value
                      : Number(event.target.value),
                    subKey,
                    place_,
                  )
                : handleChange(
                    setData,
                    Number.isNaN(Number(event.target.value))
                      ? event.target.value
                      : Number(event.target.value),
                    place_,
                    null,
                  )
            }
          />
        </FormControl>
      </div>
    );
  };

  const SelectFieldWithState = ({ place_, subKey = '' }) => {
    const [data, setData] = useState({
      label: '',
      value: '',
    });

    useEffect(() => {
      if (isComplex) {
        setData({
          value: componentProps.style[place_][subKey] || '',
          label: `${place_} - ${subKey}`,
        });
      } else {
        setData({ value: componentProps.style[place_] || '', label: place_ });
      }
    }, []);

    return (
      <div>
        <h3>
          {place_} | {data?.value || fontFamily[0].value}
        </h3>

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.value || fontFamily[0].value}
            autoWidth
            onChange={(event: SelectChangeEvent) =>
              isComplex
                ? handleChange(setData, event.target.value, subKey, place_)
                : handleChange(setData, event.target.value, place_)
            }
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

  const styleComponents = {
    width: InputFieldWithState,
    height: InputFieldWithState,
    marginBottom: InputFieldWithState,
    borderRadius: InputFieldWithState,
    color: ColorFieldWithState,
    background: ColorFieldWithState,
    fontFamily: SelectFieldWithState,
    fontSize: InputFieldWithState,
  };

  const renderData = React.useMemo(() => {
    let res: ((false | React.ReactElement)[] | (false | React.ReactElement)[][]) = [];
    if (isComplex) {
      const keys = Object.keys(componentProps.style);
      res = keys.map((el) =>
          componentProps.style[el] ? Object.keys(componentProps.style[el]).map((subElement, id) => {
          const Component = styleComponents[subElement];
          return (
              !!(Component &&  componentProps.style[el][subElement])  && (
              <Container  key={el + String(id)}>
                <Component place_={el} subKey={subElement} />
              </Container>
            )
          );
        }) : [],
      );
    } else {
      res = Object.keys(componentProps.style)?.map((el, id) => {
        const Component = styleComponents[el];
        return (
            !!(Component && componentProps.style[el]) && (
            <Container key={el + String(id)}>
              <Component place_={el}  />
            </Container>
          )
        );
      });
    }
    return res;
  }, [propName]);


  // console.log(componentProps.style);
  return (
    <div style={{ minWidth: '500px' }}>
        <fieldset style={{backgroundColor:'rgba(0,0,0,.15)'}} >
          <legend>preview</legend>
          <Component {...componentProps} />
        </fieldset>
      {renderData}
    </div>
  );
};

export default StyleEditor_v2;
