import { useEffect, useState } from "react";
import { useStyleElement } from "../../../hooks/useStyleElement";
import { addListValue } from "@/store/LetterBuilderStore/styleModule";
import { useAppDispatch } from "@/store/store";

const ListComponent = ({ id }: { id: string }) => {
  const { handleOpen, parameters } = useStyleElement(id, {
    fontSize: "14px",
    lineHeight: "20px",
    fontFamily: "Roboto, sans-serif",
  });
  const [arrList, setArrList] = useState<string[]>([""]);

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (parameters?.valueList) {
      setArrList(Object.values(parameters.valueList));
    }
  }, [parameters?.valueList]);

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>, key: number) => {
    const textList = e.target.value;
    dispatch(addListValue({ id, key, textList }));
  };

  const onKeyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>, key: number) => {
    switch (e.code) {
      case "Enter":
        if ((e.target as HTMLInputElement).value.length > 0) {
          key = key + 1;
          const textList = "";
          dispatch(addListValue({ id, textList, key }));
        }
        break;

      case "Backspace":
        if (arrList.length > 1 && (e.target as HTMLInputElement).value.length === 0) dispatch(addListValue({ id, key }));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div>
        <ul
          className="pl-5"
          style={{
            color: "#000",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            outline: "none",
            listStyleType: "disc",
            ...parameters?.styles,
          }}
        >
          {arrList.map((item: string, idx: number) => {
            const defItem = parameters?.valueList || [""];
            const key = idx;
            return (
              <li key={key} style={{}}>
                <input
                  style={{
                    width: "200px",
                    border: "none",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onClick={handleOpen}
                  placeholder="Это новый пункт"
                  onChange={(e) => onChangeHandle(e, key)}
                  onKeyDown={(e) => onKeyDownHandle(e, key)}
                  defaultValue={item || (Array.isArray(defItem) ? defItem[key] : '')}
                ></input>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListComponent;
