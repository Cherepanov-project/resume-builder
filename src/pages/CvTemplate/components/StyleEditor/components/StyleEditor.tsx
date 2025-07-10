import React, { useMemo } from "react";
import { StyleEditorProps } from "../type";
import Container from "./Container";
import SelectField from "./SelectField";
import ColorField from "./ColorField";
import InputField from "./InputField";
import { StyleComponentsType } from "../type";

const StyleEditor_v2: React.FC<StyleEditorProps> = ({
  componentProps,
  updateParent,
  setNewStyleValue,
  place = "",
  Component,
  isComplex = false,
}) => {
  const handleChange = (value: string | number, el: string, place_: string | null = null): void => {
    isComplex ? setNewStyleValue(place_ || "", el, value) : setNewStyleValue(place, el, value);
    updateParent();
  };

  const getStyleValue = (
    place_: string,
    subKey: string = "",
  ): { value: string | number; label: string } => {
    if (isComplex && componentProps.style[place_]) {
      const styleValue = componentProps.style[place_];
      if (typeof styleValue === "object" && styleValue !== null && subKey in styleValue) {
        const nestedValue = styleValue[subKey];
        if (typeof nestedValue === "string" || typeof nestedValue === "number") {
          return {
            value: nestedValue,
            label: `${place_} - ${subKey}`,
          };
        }
      }
    } else {
      const styleValue = componentProps.style[place_];
      if (typeof styleValue === "string" || typeof styleValue === "number") {
        return {
          value: styleValue,
          label: place_,
        };
      }
    }
    return {
      value: "",
      label: isComplex ? `${place_} - ${subKey}` : place_,
    };
  };

  const styleComponents = useMemo<StyleComponentsType>(
    () => ({
      width: InputField,
      height: InputField,
      marginBottom: InputField,
      borderRadius: InputField,
      color: ColorField,
      background: ColorField,
      fontFamily: SelectField,
      fontSize: InputField,
    }),
    [],
  );

  const renderData = useMemo(() => {
    const result: React.ReactNode[] = [];

    if (isComplex) {
      const keys = Object.keys(componentProps.style);
      keys.forEach((el) => {
        const styleValue = componentProps.style[el];
        if (typeof styleValue === "object" && styleValue !== null) {
          const subElements = Object.keys(styleValue)
            .map((subElement, id) => {
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
            })
            .filter(Boolean);

          result.push(...subElements);
        }
      });
    } else {
      const elements = Object.keys(componentProps.style || {})
        .map((el, id) => {
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
        })
        .filter(Boolean);

      result.push(...elements);
    }

    return result;
  }, [componentProps.style, isComplex, styleComponents, handleChange]);

  return (
    <div style={{ minWidth: "500px" }}>
      <fieldset style={{ backgroundColor: "rgba(0,0,0,.15)" }}>
        <legend>preview</legend>
        <Component {...componentProps} />
      </fieldset>
      {renderData}
    </div>
  );
};

export default StyleEditor_v2;
