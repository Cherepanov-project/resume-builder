import { useDispatch } from 'react-redux';

import {
  handleSettingsMenu,
  setLayoutDate,
  editRowDate,
} from '../../../store/landingBuilder/sectionsManagerSlice';

import { CloseOutlined } from '@ant-design/icons';
import './SettingsMenu.scss';

import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { T_BlockElement, T_SectionElementProps } from '@/types/landingBuilder';
import { useAppSellector } from '@/hooks/cvTemplateHooks';

const SettingsMenu = () => {
  const id = useAppSellector((state) => state.sectionsManager.curId);

  const [r, w] = String(id).split('');
  const row = Number(r);
  const col = Number(w);

  const layoutDate = useAppSellector((state) => state.sectionsManager.layoutDate);
  const layoutRow = layoutDate[row];

  const [type, setType] = useState('');
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    setTextToElement();
  }, [text]);

  useEffect(() => {
    setUrlToElement();
  }, [url]);

  const dispatch = useDispatch();

  const selectOptions = [
    // title === element PROPS
    {
      value: '',
      label: '',
      title: {
        key: '',
        text: '',
        wrapperStyle: { display: 'block' },
        textStyle: { display: 'block' },
      },
    },
    {
      label: 'Block Title',
      value: 'LayoutBlockTitle',
      key: 'title',
      title: {
        key: 'title',
        text: 'Block title text',
        wrapperStyle: { lineHeight: '20' },
        textStyle: { textAlign: 'center', fontSize: '18px' },
        // inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
      },
    },
    {
      label: 'Block Paragraph',
      value: 'LayoutBlockParagraph',
      key: 'paragraph',
      title: {
        key: 'paragraph',
        text: 'Block paragraph text',
        wrapperStyle: { textAlign: 'center' },
        textStyle: { fontSize: '16px', margin: '0px' },
        // inputStyle: { width: '100%', border: 'none' },
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
        textStyle: { border: 'none', height: '100%', width: '100%' },
      },
    },
    {
      label: 'Block Button',
      value: 'LayoutBlockButton',
      key: 'button',
      title: {
        key: 'button',
        text: 'CLICK ME!',
        wrapperStyle: {
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        },
        textStyle: {
          fontSize: '16px',
          margin: '0px',
          width: '100%',
          height: '100%',
          backgroundColor: 'green',
        },
        // inputStyle: { width: '100%', border: 'none' },
      },
    },
    {
      label: 'Block Anchor',
      value: 'LayoutBlockAnchor',
      key: 'anchor',
      title: {
        key: 'anchor',
        text: 'LINK TO',
        url: url,
        wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
        textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
        // inputStyle: { width: '100%', border: 'none' },
      },
    },
  ];

  // изменение ширины блока по X
  const handleLayoutX = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const value = e.target.value;
    if (calcNewRowW(Number(value)) && typeof Number(value) === 'number') {
      const newValue = JSON.parse(JSON.stringify(layoutRow));
      newValue[i].layout.w = Number(value);
      dispatch(editRowDate({ row, date: newValue }));
    }
  };

  // изменение ширины блока по Y
  const handleLayoutY = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const value = e.target.value;
    const newValue = JSON.parse(JSON.stringify(layoutRow));
    newValue[i].layout.h = Number(value);
    dispatch(editRowDate({ row, date: newValue }));
  };

  // проверка при изменении ширины блока, что бы новая ширина секции была меньше 6
  const calcNewRowW = (value: number) => {
    let prevColsSum = 0;
    for (let i = 0; i < layoutRow.length; i++) {
      prevColsSum += layoutRow[i].layout.w;
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
  const setPropsToElement = (
    label: { key: string; title: T_SectionElementProps; value: string },
    r: number,
    w: number,
  ) => {
    setType(label.key);
    setText(label.title.text);
    const id = String(r) + w;
    const prevRow = JSON.parse(JSON.stringify(layoutDate[r]));
    const idxInRow = prevRow.findIndex((el: T_BlockElement) => {
      return String(el.layout.i) === id;
    });
    console.log(prevRow[idxInRow]);
    prevRow[idxInRow].name = label.value;
    prevRow[idxInRow].props = label.title;
    const newRow = [...prevRow];
    dispatch(setLayoutDate({ ...layoutDate, [r]: newRow }));
  };

  // изменение текста содержимого или url изображения
  // (при вводе в input и изменение стейта value)
  const setTextToElement = () => {
    if (text) {
      const prevRow = JSON.parse(JSON.stringify(layoutDate[row]));
      const idxInRow = prevRow.findIndex((el: T_BlockElement) => {
        return String(el.layout.i) === id;
      });
      prevRow[idxInRow].props.text = text;
      const newRow = [...prevRow];
      dispatch(setLayoutDate({ ...layoutDate, [r]: newRow }));
    }
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setText(text);
  };

  // блок ввода текста с input
  const textProps = () => {
    return (
      <div className="settings-menu__content__title-props">
        <form id="section-settings-form">
          {(type === 'anchor' || type === 'button') && urlInput()}
          <label id="section-settings-form" className="settings-menu__content__title-props__label">
            <span>text: </span>
            <textarea value={text} onChange={(e) => handleText(e)} />
          </label>
        </form>
      </div>
    );
  };

  const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setUrl(`${text}`);
  };

  const setUrlToElement = () => {
    if (url) {
      const prevRow = JSON.parse(JSON.stringify(layoutDate[row]));
      const idxInRow = prevRow.findIndex((el: T_BlockElement) => {
        return String(el.layout.i) === id;
      });
      prevRow[idxInRow].props.url = url;
      const newRow = [...prevRow];
      dispatch(setLayoutDate({ ...layoutDate, [r]: newRow }));
    }
  };
  // инпут для url
  const urlInput = () => {
    return (
      <label>
        Введите target url:
        <input type="text" value={url} onChange={(e) => handleUrl(e)}></input>
      </label>
    );
  };

  return (
    <div className="settings-menu">
      <div className="settings-menu__title">
        {`| row:${r} | col:${w} |`}
        <CloseOutlined
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={() => dispatch(handleSettingsMenu(''))}
        />
      </div>
      <form className="constructor-container__row__el__section__inputs">
        <label>
          w:
          <input
            className="constructor-container__row__el__section__input"
            value={`${layoutRow[col - 1].layout.w}`}
            onChange={(e) => handleLayoutX(e, col - 1)}
          ></input>
        </label>
        <label>
          h:
          <input
            className="constructor-container__row__el__section__input"
            value={`${layoutRow[col - 1].layout.h}`}
            onChange={(e) => handleLayoutY(e, col - 1)}
          ></input>
        </label>
      </form>
      <div className="settings-menu__content">
        Choose element:
        <Select
          labelInValue
          defaultValue={{
            key: '',
            value: '',
            label: '',
            title: {
              key: '',
              text: '',
              wrapperStyle: { display: 'block' },
              textStyle: { display: 'block' },
              style: { '': '' },
            },
          }}
          style={{ width: 160 }}
          onChange={(label) => setPropsToElement(label, row, col)}
          options={selectOptions}
        />
        {type && textProps()}
      </div>
    </div>
  );
};

export default SettingsMenu;
