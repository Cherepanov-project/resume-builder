import { useDispatch, useSelector } from 'react-redux';

import {
  editRowDate,
  handleSettingsMenu,
} from '../../../store/landingBuilder/sectionsManagerSlice';

import './ConstructorRowEl.scss';

import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const ConstructorRowEl = ({ row }) => {
  const dispatch = useDispatch();

  const layoutDate = useSelector((state) => state.sectionsManager.layoutDate);
  const layoutRow = layoutDate[row];
  const columns = layoutRow.length;

  const [gridLayoutStyle, setGridLayoutStyle] = useState({
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
  });

  useEffect(() => {
    gridLayoutStyled();
  }, [layoutRow]);

  // задание grid-ряду свойства gridTemplateColumns при изменении количсетва блоков в ряду
  const gridLayoutStyled = () => {
    const v = layoutRow.map((v) => v.w + 'fr').join(' ');
    const style = { gridTemplateColumns: v, gridTemplateRows: '1fr' };
    setGridLayoutStyle(style);
  };

  // добавление блока в ряду
  const addColumn = () => {
    if (columns < 3 && calcNewRowW(columns, 1) <= 6) {
      const id = Number(String(row) + (columns + 1));
      const newValue = { i: id, x: columns, y: row - 1, w: 1, h: 1 };
      dispatch(handleSettingsMenu());
      dispatch(editRowDate({ row, date: [...layoutRow, newValue] }));
    }
  };

  // удаление блока в ряду
  const removeColumn = () => {
    if (columns > 1) {
      const newSectionValue = JSON.parse(JSON.stringify(layoutRow));
      const newValue = newSectionValue.slice(0, columns - 1);
      dispatch(handleSettingsMenu());
      dispatch(editRowDate({ row, date: newValue }));
    }
  };

  // проверка ширины секции при добавлении блока или изменении ширины одного из блоков, что бы было меньше 6
  const calcNewRowW = (col, value) => {
    let prevColsSum = 0;
    for (let i = 0; i < col; i++) {
      prevColsSum += layoutRow[i].w;
    }
    const newValue = prevColsSum + value;
    if (newValue >= 6) {
      console.log('MAX SECTION WIDTH');
    }
    return newValue;
  };

  const renderColumns = () => {
    const columnsEls = [];
    const r = String(row);
    for (let i = 1; i <= columns; i++) {
      // задание текста и стилей для предпросмотра содержимого
      const isImg = false || layoutDate[r][i - 1].props?.key;
      const text = layoutDate[r][i - 1].props?.text;
      const wrapperStyle = layoutDate[r][i - 1].props?.wrapperStyle;
      const textStyle = layoutDate[r][i - 1].props?.textStyle;
      // задание размеров для секции в зависимости от fr
      const style = {
        height: `${layoutDate[r][i - 1].h * 30}px`,
        width: `${layoutDate[r][i - 1].w * 191}px`,
        cursor: 'pointer',
      };
      // отображение секций одного ряда
      columnsEls.push(
        <div
          key={i}
          className="constructor-container__row__el__section"
          style={style}
          onClick={() => dispatch(handleSettingsMenu(r + i))}
        >
          {/* Предпросмотр содержимого секции */}
          <div className="constructor-container__row__el__section__content" style={wrapperStyle}>
            {isImg ? (
              <img src={text} style={{ width: '100%' }}></img>
            ) : (
              <div style={textStyle}>{text}</div>
            )}
          </div>
        </div>,
      );
    }
    return columnsEls;
  };

  return (
    <div className="constructor-container__row">
      <PlusCircleOutlined
        style={{ alignSelf: 'center', fontSize: '30px', cursor: 'pointer' }}
        onClick={() => addColumn()}
      />
      <MinusCircleOutlined
        style={{ alignSelf: 'center', fontSize: '30px', cursor: 'pointer', marginLeft: '5px' }}
        onClick={() => removeColumn()}
      />
      <div className="constructor-container__row__el" style={gridLayoutStyle}>
        {renderColumns()}
      </div>
    </div>
  );
};

export default ConstructorRowEl;
