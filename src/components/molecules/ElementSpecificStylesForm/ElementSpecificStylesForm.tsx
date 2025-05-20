import { useState, memo } from "react";
import { Stack, FormControl } from "@mui/material";
import styles from "./ElementSpecificStylesForm.module.scss";
import Item from "@atoms/StyledPaperItem";
import { useInput } from "@/hooks/useSpecificStylesFormHook";
import { nanoid } from "nanoid";

const ElementSpecificStylesForm = () => {
  const newImp = useInput("");
  const [borderOn, setBorderOn] = useState("");
  const [size, setSize] = useState("");
  const styleInputs = [
    {
      label: "Text color:",
      styleSetting: "color",
      type: "color",
    },
    {
      label: "Background color:",
      styleSetting: "backgroundColor",
      type: "color",
    },
    {
      label: "Background image url:",
      styleSetting: "backgroundImage",
      type: "text",
    },
  ];

  return (
    <form>
      <label>
        <div className={styles.inputLabel}>Размер шрифта</div>
        <input
          className={styles.textInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSize(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              newImp.onChangeStyle({
                fontSize: `${size}px`,
              });
              setSize("");
            }
          }}
          placeholder="Font Size"
          value={size}
        ></input>
      </label>
      <label>
        <div className={styles.inputLabel}>Размер рамки</div>
        <input
          className={styles.textInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setBorderOn(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              newImp.onChangeStyle({
                border: `${borderOn}px solid`,
              });
              setBorderOn("");
            }
          }}
          placeholder="Border Size"
          value={borderOn}
        ></input>
      </label>
      <Stack>
        {styleInputs.map((elem) => {
          let valueStart = "";
          let valueEnd =
            elem.styleSetting === "fontSize"
              ? "px"
              : elem.styleSetting === "border"
                ? "px solid"
                : "";
          const minNum = elem.styleSetting === "fontSize" ? 8 : 0;

          if (elem.styleSetting === "backgroundImage") {
            valueEnd = ")";
            valueStart = "url(";
          }

          const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            newImp.onChangeStyle({
              [elem.styleSetting]: `${valueStart}${e.target.value}${valueEnd}`,
            });
          };

          return (
            <Item key={nanoid()}>
              <FormControl>
                <label>
                  <span className={styles.inputLabel}>{elem.label}</span>
                  <input
                    className={styles.textInput}
                    type={elem.type}
                    placeholder={elem.label}
                    min={minNum}
                    max={50}
                    onChange={onChange}
                  ></input>
                </label>
              </FormControl>
            </Item>
          );
        })}
        {Number(borderOn) > 0 && (
          <>
            <Item>
              <FormControl>
                <label>
                  <span className={styles.inputLabel}>Border color:</span>
                  <input
                    className={styles.colorInput}
                    type="color"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      newImp.onChangeStyle({ borderColor: e.target.value });
                    }}
                  ></input>
                </label>
              </FormControl>
            </Item>
            <Item>
              <FormControl>
                <label>
                  <span className={styles.inputLabel}>Border radius:</span>
                  <input
                    className={styles.textInput}
                    placeholder="0"
                    type="number"
                    min={0}
                    max={50}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      newImp.onChangeStyle({ borderRadius: `${e.target.value}px` });
                    }}
                  ></input>
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
