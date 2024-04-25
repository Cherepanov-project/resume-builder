import { ILayoutBlock } from '@/types/landingBuilder';
import { useEffect, useState } from 'react';

import style from './Accordion.module.scss';
import { nanoid } from 'nanoid';
type StyleType = {
  [key: string]: string | number;
};

type AccordionData = Array<[string, string]>;

const Accordion: React.FC<ILayoutBlock> = ({ props }) => {
  const [accordion, setAccordion] = useState<AccordionData>(props.accordion || []);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]); // Массив активных индексов
  const isEditing = false;

  useEffect(() => {
    setAccordion(props.accordion || []);
  }, [props]);

  const wrapperStyle: StyleType = {
    ...props?.wrapperStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%',
    flexDirection: 'column',
    backgroundSize: 'contain',
    width: 'auto',
    backgroundRepeat: 'no-repeat',
  };

  const handleAccordionClick = (index: number) => {
    // Проверяем, есть ли индекс в массиве активных индексов
    const isActive = activeIndexes.includes(index);
    setActiveIndexes(
      isActive ? activeIndexes.filter((i) => i !== index) : [...activeIndexes, index],
    );
  };

  const inputPannel = () => {
    return <div className="anchor__input-pannel"></div>;
  };

  const content = () => {
    return (
      <div style={{ width: '100%'}}>
        {accordion.map((item, index) => (
          <div className={style['accordion-item']} key={nanoid()}>
            <div className={style['accordion-title']} onClick={() => handleAccordionClick(index)}>
              {/* Заголовок аккордеона */}
              <h3 className={style['accordion-title']}>{item[0]}</h3>
              <button className={style['accordion-button']}>+</button>
            </div>
            {/* Проверяем, есть ли текущий индекс в массиве активных индексов */}
            {activeIndexes.includes(index) && (
              <div
                className={`${style['accordion-content']} ${activeIndexes.includes(index) ? style['open'] : style['close']}`}
              >
                <p>{item[1]}</p> {/* Текст аккордеона */}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={wrapperStyle}>
      {isEditing && inputPannel()}
      {!isEditing && content()}
    </div>
  );
};

export default Accordion;
