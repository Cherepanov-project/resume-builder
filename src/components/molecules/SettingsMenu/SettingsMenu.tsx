import { useDispatch, useSelector } from 'react-redux';

import {
  handleSettingsMenu,
  setLayoutDate,
  editRowDate,
} from '../../../store/landingBuilder/sectionsManagerSlice';

import { CloseOutlined } from '@ant-design/icons';
import './SettingsMenu.scss';

import { Select } from 'antd';
import { useEffect, useState } from 'react';

const SettingsMenu = () => {
  const id = useSelector((state) => state.sectionsManager.curId);

  const [r, w] = String(id).split('');
  const row = Number(r);
  const col = Number(w);

  const layoutDate = useSelector((state) => state.sectionsManager.layoutDate);
  const layoutRow = layoutDate[r];

  const [type, setType] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setTextToElement();
  }, [inputValue]);

  const dispatch = useDispatch();

  const selectOptions = [
    // title === element PROPS
    {
      value: '',
      label: '',
      title: {},
    },
    {
      label: 'Block Title',
      value: 'LayoutBlockTitle',
      key: 'text',
      title: {
        text: 'Block title text',
        textStyle: { textAlign: 'center', fontSize: '18px' },
        inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
      },
    },
    {
      label: 'Block Paragraph',
      value: 'LayoutBlockParagraph',
      key: 'paragraph',
      title: {
        text: 'Block paragraph text',
        wrapperStyle: { textAlign: 'center' },
        textStyle: { fontSize: '16px', margin: '0px' },
        inputStyle: { width: '100%', border: 'none' },
      },
    },
    {
      label: 'Block Image',
      value: 'LayoutBlockImage',
      key: 'image',
      title: {
        key: 'image',
        text: 'https://tinyjpg.com/images/social/website.jpg',
        wrapperStyle: { textAlign: 'center' },
        inputStyle: { border: 'none' },
      },
    },
  ];

  // изменение ширины блока по X
  const handleLayoutX = (e, i) => {
    const value = e.target.value;
    if (calcNewRowW(Number(value)) && typeof Number(value) === 'number') {
      const newValue = JSON.parse(JSON.stringify(layoutRow));
      newValue[i].w = Number(value);
      dispatch(editRowDate({ row, date: newValue }));
    }
  };

  // изменение ширины блока по Y
  const handleLayoutY = (e, i) => {
    const value = e.target.value;
    const newValue = JSON.parse(JSON.stringify(layoutRow));
    newValue[i].h = Number(value);
    dispatch(editRowDate({ row, date: newValue }));
  };

  // проверка при изменении ширины блока, что бы новая ширина секции была меньше 6
  const calcNewRowW = (value) => {
    let prevColsSum = 0;
    for (let i = 0; i < layoutRow.length; i++) {
      prevColsSum += layoutRow[i].w;
    }
    const newValue = prevColsSum + value;
    if (newValue > 6) {
      console.log('MAX SECTION WIDTH');
      return false;
    }
    return true;
  };

  // задание элементу children параметров при выборе или изменении basic элемента:
  // - name: название basic LayoutBlock элемента (molecules)
  // - props: пропсы для содержимого и стилизации содржимого
  const setPropsToElement = (label, r, w) => {
    setType(label.key);
    setInputValue(label.title.text);
    const id = String(r) + w;
    const prevRow = JSON.parse(JSON.stringify(layoutDate[r]));
    const idxInRow = prevRow.findIndex((el) => {
      return String(el.i) === id;
    });
    prevRow[idxInRow].name = label.value;
    prevRow[idxInRow].props = label.title;
    const newRow = [...prevRow];
    dispatch(setLayoutDate({ ...layoutDate, [r]: newRow }));
  };

  // изменение текста содержимого или url изображения
  // (при вводе в input и изменение стейта value)
  const setTextToElement = () => {
    if (inputValue) {
      const prevRow = JSON.parse(JSON.stringify(layoutDate[r]));
      const idxInRow = prevRow.findIndex((el) => {
        return String(el.i) === id;
      });
      prevRow[idxInRow].props.text = inputValue;
      const newRow = [...prevRow];
      dispatch(setLayoutDate({ ...layoutDate, [r]: newRow }));
    }
  };

  const handleText = (e) => {
    const text = e.target.value;
    setInputValue(text);
  };

  // блок ввода текста с input
  const textProps = () => {
    return (
      <div className="settings-menu__content__title-props">
        <form id="section-settings-form">
          <label id="section-settings-form" className="settings-menu__content__title-props__label">
            <span>text: </span>
            <textarea value={inputValue} onChange={(e) => handleText(e)} />
          </label>
        </form>
      </div>
    );
  };

  return (
    <div className="settings-menu">
      <div className="settings-menu__title">
        {`| row:${r} | col:${w} |`}
        <CloseOutlined
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={() => dispatch(handleSettingsMenu())}
        />
      </div>
      <form className="constructor-container__row__el__section__inputs">
        <label>
          w:
          <input
            className="constructor-container__row__el__section__input"
            value={`${layoutRow[col - 1].w}`}
            onChange={(e) => handleLayoutX(e, col - 1)}
          ></input>
        </label>
        <label>
          h:
          <input
            className="constructor-container__row__el__section__input"
            value={`${layoutRow[col - 1].h}`}
            onChange={(e) => handleLayoutY(e, col - 1)}
          ></input>
        </label>
      </form>
      <div className="settings-menu__content">
        Choose element:
        <Select
          labelInValue
          defaultValue={{ value: '', label: '' }}
          style={{ width: 160 }}
          onChange={(label) => setPropsToElement(label, r, w)}
          options={selectOptions}
        />
        {type && textProps()}
      </div>
    </div>
  );
};

export default SettingsMenu;
