import { ILayoutBlock } from "@/types/landingBuilder";
import { useEffect, useState } from "react";

import style from "./Accordion.module.scss";
import { nanoid } from "nanoid";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";

type StyleType = {
  [key: string]: string | number;
};

type AccordionData = Array<[string, string]>;

const Accordion: React.FC<ILayoutBlock> = ({ props }) => {
  const accord = typeof props.accordion === "string" ? [...props.accordion] : props.accordion;
  const [accordion, setAccordion] = useState<AccordionData>(accord || []);
  console.log(accordion);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]); // Массив активных индексов
  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const id: string = useTypedSelector((state) => state.sectionsManager.curId);

  let [r, w] = String(id).split("");
  let row: number = Number(r);
  let col: number = Number(w);

  let layoutRow = layoutDate[row];
  if (!layoutRow) {
    layoutRow = layoutDate[1];
    r = "1";
    row = 1;
  }
  let layoutElement = layoutRow[col - 1];
  if (!layoutElement) {
    layoutElement = layoutRow[0];
    w = "1";
    col = 1;
  }

  useEffect(() => {
    const accord = typeof props.accordion === "string" ? [...props.accordion] : props.accordion;
    setAccordion(accord || []);
  }, [props]);

  const wrapperStyle: StyleType = {
    ...props?.wrapperStyle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundSize: "contain",
    width: "auto",
    backgroundRepeat: "no-repeat",
    zIndex: "10",
  };

  const handleAccordionClick = (index: number) => {
    // Проверяем, есть ли индекс в массиве активных индексов
    const isActive = activeIndexes.includes(index);
    setActiveIndexes(
      isActive ? activeIndexes.filter((i) => i !== index) : [...activeIndexes, index],
    );
  };

  const content = () => {
    return (
      <div style={{ width: "100%", marginTop: "15px", paddingBottom: "20px" }}>
        {accordion.map((item, index) => (
          <div className={style["accordion-item"]} key={nanoid()}>
            <div
              className={style["accordion-title"]}
              onClick={() => {
                handleAccordionClick(index);
              }}
            >
              {/* Заголовок аккордеона */}
              <h3 className={style["accordion-title"]}>{item[0]}</h3>
              <button className={style["accordion-button"]}>+</button>
            </div>
            {/* Проверяем, есть ли текущий индекс в массиве активных индексов */}
            {activeIndexes.includes(index) && (
              <>
                <div
                  className={`${style["accordion-content"]} ${activeIndexes.includes(index) ? style["open"] : style["close"]}`}
                >
                  <p>{item[1]}</p> {/* Текст аккордеона */}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  return <div style={wrapperStyle}>{content()}</div>;
};

export default Accordion;
