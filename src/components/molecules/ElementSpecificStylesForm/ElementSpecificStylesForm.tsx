import { useState, memo, ChangeEvent } from "react";
import { Stack, FormControl } from "@mui/material";
import styles from "./ElementSpecificStylesForm.module.scss";
import Item from "@atoms/StyledPaperItem";
import { useInput } from "@/hooks/useSpecificStylesFormHook";
interface StyleInput {
  label: string;
  styleSetting: string;
  type: string;
  min?: number;
  max?: number;
  placeholder?: string;
  suffix?: string;
  prefix?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ElementSpecificStylesForm = () => {
  const newImp = useInput("");
  const [inputValue, setInputValue] = useState({
    fontSize: "",
    borderSize: "",
  });
  const [colors, setColors] = useState({
    color: "#000000",
    backgroundColor: "#ffffff",
    borderColor: "#000000",
  });

  const styleInputs: StyleInput[] = [
    {
      label: "Font Size:",
      styleSetting: "fontSize",
      type: "number",
      placeholder: "14",
      min: 8,
      max: 50,
      suffix: "px",
      value: inputValue.fontSize,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue({ ...inputValue, fontSize: value });
        newImp.onChangeStyle({ fontSize: value ? `${value}px` : "" });
      },
    },
    {
      label: "Border Size:",
      styleSetting: "borderWidth",
      type: "number",
      min: 0,
      max: 50,
      suffix: "px",
      value: inputValue.borderSize,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue({ ...inputValue, borderSize: value });
        newImp.onChangeStyle({
          borderWidth: value ? `${value}px` : "",
          borderStyle: value ? "solid" : "none",
          borderColor: value ? colors.borderColor : "transparent",
        });
      },
      placeholder: "0",
    },
    {
      label: "Text color:",
      styleSetting: "color",
      type: "color",
      value: colors.color,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setColors({ ...colors, color: value });
        newImp.onChangeStyle({ color: e.target.value });
      },
    },
    {
      label: "Background color:",
      styleSetting: "backgroundColor",
      type: "color",
      value: colors.backgroundColor,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setColors({ ...colors, backgroundColor: value });
        newImp.onChangeStyle({ backgroundColor: e.target.value });
      },
    },
    {
      label: "Background image url:",
      styleSetting: "backgroundImage",
      type: "text",
      placeholder: "Enter image URL",
      prefix: "url(",
      suffix: ")",
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        newImp.onChangeStyle({
          backgroundImage: e.target.value ? `url(${e.target.value})` : "",
        });
      },
    },
  ];

  return (
    <form>
      <Stack>
        {styleInputs.map((elem) => {
          const inputProps = {
            className: elem.type === "color" ? styles.colorInput : styles.textInput,
            type: elem.type as "number" | "color" | "text",
            placeholder: elem.placeholder,
            min: elem.min,
            max: elem.max,
            value: elem.value || "",
            onChange: elem.onChange,
          };

          return (
            <Item sx={{ background: "#333" }} key={`style-input-${elem.styleSetting}`}>
              <FormControl>
                <label>
                  <span className={styles.inputLabel}>{elem.label}</span>
                  <input {...inputProps} />
                </label>
              </FormControl>
            </Item>
          );
        })}

        {Number(inputValue.borderSize) > 0 && (
          <>
            <Item sx={{ background: "#333" }}>
              <FormControl>
                <label>
                  <span className={styles.inputLabel}>Border color:</span>
                  <input
                    className={styles.colorInput}
                    type="color"
                    value={colors.borderColor}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const value = e.target.value;
                      setColors({ ...colors, borderColor: value });
                      newImp.onChangeStyle({
                        borderColor: value,
                        borderStyle: "solid",
                      });
                    }}
                  />
                </label>
              </FormControl>
            </Item>
            <Item sx={{ background: "#333" }}>
              <FormControl>
                <label>
                  <span className={styles.inputLabel}>Border radius:</span>
                  <input
                    className={styles.textInput}
                    placeholder="0"
                    type="number"
                    min={0}
                    max={50}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      newImp.onChangeStyle({ borderRadius: `${e.target.value}px` });
                    }}
                  />
                </label>
              </FormControl>
            </Item>
          </>
        )}
      </Stack>
    </form>
  );
};

export default memo(ElementSpecificStylesForm);
