import { ILayoutBlock } from '@/types/landingBuilder';
import { useEffect, useState } from 'react';

import style from './Accordion.module.scss';
import { nanoid } from 'nanoid';
import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { editRowDate } from '../../../store/landingBuilder/sectionsManagerSlice';
// import { setProps } from '@/store/landingBuilder/layoutSlice';
type StyleType = {
  [key: string]: string | number;
};

type AccordionData = Array<[string, string]>;

const Accordion: React.FC<ILayoutBlock> = ({ props }) => {
  const [accordion, setAccordion] = useState<AccordionData>(props.accordion || []);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]); // Массив активных индексов
  const isEditing = false;
  const dispatch = useAppDispatch();
  const layoutDate = useAppSellector((state) => state.sectionsManager.layoutDate);
  const id: string = useAppSellector((state) => state.sectionsManager.curId);

  let [r, w] = String(id).split('');
  let row: number = Number(r);
  let col: number = Number(w);

  let layoutRow = layoutDate[row];
  if (!layoutRow) {
    layoutRow = layoutDate[1];
    r = '1';
    row = 1;
  }
  let layoutElement = layoutRow[col - 1];
  if (!layoutElement) {
    layoutElement = layoutRow[0];
    w = '1';
    col = 1;
  }

  const handleUpdate = (type: string, value: string | AccordionData, i: number): void => {
    const newValue = JSON.parse(JSON.stringify(layoutRow));
    switch (type) {
      case 'type': {
        const label = typeof value === 'string' ? getLabel(value) : getLabel(value[0][0]);
        newValue[i].name = value;
        newValue[i].type = label.label;
        newValue[i].props.key = label.key;
        newValue[i].layout = label.layout;
        if (label.value) {
          // newValue[i].props.value = label.title.value;
        }
        if (label.url) newValue[i].url = label.url;
        // console.log(row, newValue);
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'url': {
        newValue[i].props.url = value;
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'title': {
        newValue[i].props.title = value;
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'text': {
        newValue[i].props.text = value;
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'description': {
        newValue[i].props.description = value;
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'imgUrl': {
        newValue[i].props.imgUrl = value;
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'buttonText': {
        newValue[i].props.buttonText = value;
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      case 'accordion': {
        newValue[i].props.accordion = value;
        newValue[i].layout = {...newValue[i].layout, h: 2*accordion.length}
        // newValue[i].layout = {...newValue[i].layout, h: 2*accordion.length + 2*activeIndexes.length}
        // newValue[i].props
        console.log('newValue[i] ', newValue[i]);
        // console.log('value ', value);
        // console.log('newValue[i].layout.h ', newValue[i].layout.h);
        dispatch(editRowDate({ row, date: newValue }));
        break;
      }
      default: {
        console.log('No case found');
      }
    }
  };

  const getLabel = (blockValue: string) => {
    switch (blockValue) {
      default:
        return {
          value: '',
          label: '',
          url: '',
          title: {
            key: '',
            text: '',
            wrapperStyle: { display: 'block' },
            textStyle: { display: 'block' },
          },
        };
        case 'Accordion':
        return {
          label: 'Accordion',
          value: 'accordion',
          key: 'accordion',
          layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
          title: {
            key: 'accordion',
            accordion: accordion,
            wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
            textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
            // inputStyle: { width: '100%', border: 'none' },
          },
        };
    }
  }

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
    zIndex: '10',
  };

  // onClick={()=>{
  //   const updatedAccordion: AccordionData = [...accordion];
  //   setAccordion(updatedAccordion);
  //   handleUpdate('accordion', updatedAccordion, col - 1);
  // }}

  const handleAccordionClick = (index: number) => {
    // Проверяем, есть ли индекс в массиве активных индексов
    const isActive = activeIndexes.includes(index);
    setActiveIndexes(
      isActive ? activeIndexes.filter((i) => i !== index) : [...activeIndexes, index],
    );
    const updatedAccordion: AccordionData = [...accordion];
    handleUpdate('accordion', updatedAccordion, col - 1);
  };

  const inputPannel = () => {
    return <div className="anchor__input-pannel"></div>;
  };

  const content = () => {
    return (
      <div style={{ width: '100%', marginTop: '15px'}}>
        {accordion.map((item, index) => (
          <div className={style['accordion-item']} key={nanoid()}>
            <div className={style['accordion-title']} onClick={() => {
              handleAccordionClick(index)
              // const updatedAccordion: AccordionData = [...accordion];
              // handleUpdate('accordion', updatedAccordion, col - 1);
              }}>
              {/* Заголовок аккордеона */}
              <h3 className={style['accordion-title']}>{item[0]}</h3>
              <button className={style['accordion-button']}>+</button>
            </div>
            {/* Проверяем, есть ли текущий индекс в массиве активных индексов */}
            {activeIndexes.includes(index) && (
              <>
              {/* {() => {
                const updatedAccordion: AccordionData = [...accordion];
                handleUpdate('accordion', updatedAccordion, col - 1);
              }} */}
              <div
                className={`${style['accordion-content']} ${activeIndexes.includes(index) ? style['open'] : style['close']}`}
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

  console.log('activeIndexes ', activeIndexes);

  return (
    <div style={wrapperStyle}>
      {isEditing && inputPannel()}
      {!isEditing && content()}
    </div>
  );
};

export default Accordion;
