import { useDispatch } from 'react-redux';

import { editRowDate, handleSettingsMenu } from '../../../store/landingBuilder/sectionsManagerSlice';

import './SectionsConstructorRowEl.scss';

import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { memo, useEffect, useState } from 'react';
import SectionsConstructorBlockElement from '@/components/atoms/SectionsConstructorBlockElement';
import { useAppSellector } from '@/hooks/cvTemplateHooks';

type SectionsConstructorRowElType = {
  row: number
}

const SectionsConstructorRowEl: React.FC<SectionsConstructorRowElType> = ({ row }) => {

    const dispatch = useDispatch();

    const layoutDate = useAppSellector(state => state.sectionsManager.layoutDate);
    const layoutRow = layoutDate[row];
    const columns = layoutRow.length;

    const [ gridLayoutStyle, setGridLayoutStyle ] = useState({gridTemplateColumns: '1fr', gridTemplateRows: '1fr'});

    useEffect(() => {
        gridLayoutStyled();
    }, [layoutRow])

    // задание grid-ряду свойства gridTemplateColumns при изменении количсетва блоков в ряду
    const gridLayoutStyled = () => {
        const v = layoutRow.map(v => v.layout.w + 'fr').join(' ');
        const style = {gridTemplateColumns: v, gridTemplateRows: '1fr'};
        setGridLayoutStyle(style);
    }

    // добавление блока в ряду
    const addColumn = () => {
        if (columns < 6 && calcNewRowW(columns, 1) <= 6) {
            const id = String(row) + (columns + 1);
            const newValue = {
              name: '',
              type: '',
              source: 'atoms',
              props: {
                key: '',
                wrapperStyle: { display: 'block' },
                textStyle: { display: 'block' }
              },
              layout: {i: id, x: columns, y: row - 1, w: 1, h: 1},
            };
            dispatch(handleSettingsMenu(''))
            dispatch(editRowDate({row, date: [...layoutRow, newValue]}))   
        }
    }
    // удаление блока в ряду
    const removeColumn = () => {
        if (columns > 1) {
            const newSectionValue = JSON.parse(JSON.stringify(layoutRow));
            const newValue = newSectionValue.slice(0, columns - 1)
            dispatch(handleSettingsMenu(''))
            dispatch(editRowDate({row, date: newValue}));
        } 
    }
    
    // проверка ширины секции при добавлении блока или изменении ширины одного из блоков, что бы было меньше 6
    const calcNewRowW: (col: number, value: number) => number = (col, value) => {
      let prevColsSum = 0;
      for (let i = 0; i < col; i++) {
        prevColsSum += layoutRow[i].layout.w;
      }
      const newValue = prevColsSum + value;
      if (newValue >= 6) {
        console.log('MAX SECTION WIDTH')
      }
      return newValue;
    }

    const renderColumns = () => {
      const r:string = String(row);
      return layoutRow.map((el, idx) => {
        const i = idx + 1;

        // задание размеров для секции в зависимости от fr
        const style = {
          height: `${el.layout.h*30}px`,
          width: `${el.layout.w*191}px`,
          cursor: 'pointer',
        }
        
        return (
          <div 
              key = {i} 
              className="constructor-container__row__el__section" 
              style={style}
              onClick={() => dispatch(handleSettingsMenu(r + i))}
              >
                {/* Предпросмотр содержимого секции */}
                <SectionsConstructorBlockElement params={el.props}/>
            </div>
        )
      })
    }

    return (
        <div className='constructor-container__row'>
            <PlusCircleOutlined 
                style={{alignSelf: 'center', fontSize: '30px', cursor: 'pointer'}}
                onClick={() => addColumn()}
            />
            <MinusCircleOutlined 
                style={{alignSelf: 'center', fontSize: '30px', cursor: 'pointer', marginLeft: '5px'}}
                onClick={() => removeColumn()}
                />
            <div className="constructor-container__row__el" style={gridLayoutStyle}>
                {renderColumns()}
            </div>
        </div>
    );
}

export const MemoizedSectionsConstructorRowEl =  memo(SectionsConstructorRowEl);