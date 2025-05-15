import { useState } from "react";
import { Stack, FormControl } from "@mui/material";
import styles from "./ElementSpecificStylesForm.module.scss";
import Item from "@atoms/StyledPaperItem";
import { useInput } from "@/hooks/useSpecificStylesFormHook";
import { nanoid } from "nanoid";

const ElementSpecificStylesForm = () => {
  const newImp = useInput("");
  const [borderOn, setBorderOn] = useState<number>(0);
  const styleInputs = [
    {
      label: "Text size:",
      styleSetting: "fontSize",
      type: "number",
    },
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
    {
      label: "Border:",
      styleSetting: "border",
      type: "range",
    },
  ];

  return (
    <form>
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
            if (elem.styleSetting === "border") setBorderOn(+e.target.value);

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
        {borderOn > 0 && (
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

export default ElementSpecificStylesForm;
