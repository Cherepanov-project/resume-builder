import { useDispatch } from 'react-redux';

import { editRowDate, handleSettingsMenu } from '@/store/landingBuilder/sectionsManagerSlice';

import { memo, useEffect, useState } from 'react';
import SectionsConstructorBlockElement from '@/components/atoms/SectionsConstructorBlockElement';
import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import {
  AddSharp,
  ArrowCircleDownSharp,
  ArrowCircleLeftSharp,
  ArrowCircleRightSharp,
  ArrowCircleUpSharp,
  DeleteSharp,
  EditSharp,
  RemoveSharp,
  SettingsSharp,
} from '@mui/icons-material';
import Close from '@mui/icons-material/Close';

type SectionsConstructorRowElType = {
  row: number;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setSeverity: React.Dispatch<React.SetStateAction<string>>;
};

const SectionsConstructorRowEl: React.FC<SectionsConstructorRowElType> = ({
  row,
  setError,
  setSeverity,
}) => {
  const dispatch = useDispatch();

  const layoutDate = useAppSellector((state) => state.sectionsManager.layoutDate);
  const layoutRow = layoutDate[row];
  // console.log(layoutRow);
  const columns = layoutRow.length;
  const [gridLayoutStyle, setGridLayoutStyle] = useState({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
  });

  // задание grid-ряду свойства gridTemplateColumns при изменении количсетва блоков в ряду
  useEffect(() => {
    const v = layoutRow.map((v) => v.layout.w + 'fr').join(' ');
    // const h = layoutRow.map((h) => h.layout.h + 'fr').join(' ');
    const style = { display: 'grid', gridTemplateColumns: v, gridTemplateRows: '1fr' };
    setGridLayoutStyle(style);
  }, [layoutRow]);

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
          textStyle: { display: 'block' },
        },
        layout: { i: id, x: columns, y: row - 1, w: 1, h: 1 },
      };
      dispatch(editRowDate({ row, date: [...layoutRow, newValue] }));
    }
  };
  // удаление блока в ряду
  const removeColumn = () => {
    if (columns > 1) {
      const newSectionValue = JSON.parse(JSON.stringify(layoutRow));
      const newValue = newSectionValue.slice(0, columns - 1);
      dispatch(editRowDate({ row, date: newValue }));
    }
  };

  // проверка ширины секции при добавлении блока или изменении ширины одного из блоков, что бы было меньше 6
  const calcNewRowW: (col: number, value: number) => number = (col, value) => {
    let prevColsSum = 0;
    for (let i = 0; i < col; i++) {
      prevColsSum += layoutRow[i].layout.w;
    }
    const newValue = prevColsSum + value;
    return newValue;
  };

  const renderColumns = () => {
    const r: string = String(row);
    // console.log(layoutRow);
    return layoutRow.map((el, idx) => {
      const i = idx + 1;

      // задание размеров для секции в зависимости от fr
      const style = {
        backgroundColor: '#fff',
        textAlign: 'center',
        height: `${el.layout.h * 30}px`,
        // height: 'auto',
        width: `${el.layout.w * 191}px`,
        cursor: 'pointer',
        '&:hover': {
          border: '1px dotted dimgrey',
          // height: `${el.layout.h * 30 - 2}px`,
          height: `${el.layout.h * 30 - 2}px`,
          width: `${el.layout.w * 191 - 2}px`,
          borderRadius: '10px',
          opacity: '0.8',
        },
      };
      // console.log('el', el);
      return (
        <Box
          key={i}
          sx={style}
          onClick={() => dispatch(handleSettingsMenu({ type: 'UPDATE_ID', value: `${r}${i}` }))}
        >
          {`${r}${i}` === id ? renderControlOfSize() : null}
          {/* Предпросмотр содержимого секции */}
          <SectionsConstructorBlockElement params={el} />
        </Box>
      );
    });
  };

  const [visible, setVisible] = useState(['inline-flex', 'none']);
  const [rowActive, setRowActive] = useState('none');
  //Обновление дисплея кнопок ряда
  useEffect(() => {
    let colSum = 0;
    for (let i = 0; i < columns; i++) {
      if (!layoutRow[i]) {
        colSum = 0;
      } else {
        colSum += layoutRow[i].layout.w;
      }
    }
    if (colSum >= 6) {
      setVisible(['none', 'inline-flex']);
    } else if (columns <= 1) {
      setVisible(['inline-flex', 'none']);
    } else {
      setVisible(['inline-flex', 'inline-flex']);
    }
  }, [columns, layoutRow]);

  // Обновление дисплея кнопок при переключении ряда
  const id = useAppSellector((state) => state.sectionsManager.curId);
  const r: string = String(row);
  useEffect(() => {
    if (r === id.split('')[0]) {
      setRowActive('initial');
    } else {
      setRowActive('none');
    }
  }, [id, r]);

  const renderControlOfCols = () => {
    const actions = [
      { icon: <AddSharp />, name: 'Add', onClick: addColumn, visible: visible[0] },
      { icon: <RemoveSharp />, name: 'Remove', onClick: removeColumn, visible: visible[1] },
    ];
    return (
      <Box sx={{ transform: 'translateZ(0px)', display: rowActive }}>
        <SpeedDial
          sx={{
            opacity: '0.2',
            '& .MuiFab-primary': { width: 36, height: 36 },
            '&:hover': {
              opacity: '1',
            },
          }}
          direction="right"
          ariaLabel="Setting for columns"
          icon={<SpeedDialIcon icon={<EditSharp />} openIcon={<Close />} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              sx={{ display: action.visible }}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  };

  const renderControlOfSize = () => {
    const actions = [
      {
        icon: <ArrowCircleUpSharp />,
        name: 'Shorten',
        onClick: handleSize,
        type: 'layoutY',
        value: '-1',
      },
      {
        icon: <ArrowCircleDownSharp />,
        name: 'Lengthen',
        onClick: handleSize,
        type: 'layoutY',
        value: '+1',
      },
      {
        icon: <ArrowCircleLeftSharp />,
        name: 'Narrow',
        onClick: handleSize,
        type: 'layoutX',
        value: '-1',
      },
      {
        icon: <ArrowCircleRightSharp />,
        name: 'Widen',
        onClick: handleSize,
        type: 'layoutX',
        value: '+1',
      },
      {
        icon: <DeleteSharp />,
        name: 'Delete',
        onClick: deleteElement,
      },
    ];
    return (
      <Box 
        sx={{ 
          transform: 'translateZ(0px)'}}>
        <SpeedDial
          sx={{
            opacity: '0.2',
            position: 'absolute',
            right: '100%',
            top: '-10px',
            '& .MuiFab-primary': { width: 36, height: 36 },
            '&:hover': {
              opacity: '1',
            },
          }}
          direction="left"
          ariaLabel="Setting for sizing"
          icon={<SpeedDialIcon icon={<SettingsSharp />} openIcon={<Close />} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => action.onClick(action.type!, action.value!)}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  };

  const handleSize = (type: string, value: string): void => {
    const newValue = JSON.parse(JSON.stringify(layoutRow));
    switch (type) {
      case 'layoutX': {
        if (
          newValue[Number(id[1]) - 1].layout.w + Number(value) !== 0 &&
          newValue[Number(id[1]) - 1].layout.w + Number(value) <= 6
        ) {
          newValue[Number(id[1]) - 1].layout.w += Number(value);
          dispatch(editRowDate({ row, date: newValue }));
        } else {
          setSeverity('warning');
          setError('Width out of bounds');
        }
        break;
      }
      case 'layoutY': {
        if (newValue[Number(id[1]) - 1].layout.h + Number(value) !== 0) {
          newValue[Number(id[1]) - 1].layout.h += Number(value);
          dispatch(editRowDate({ row, date: newValue }));
        } else {
          setSeverity('warning');
          setError('Height out of bounds');
        }
        break;
      }
      default: {
        console.log('No case found');
      }
    }
  };

  const deleteElement = () => {
    const newSectionValue = JSON.parse(JSON.stringify(layoutRow));
    newSectionValue.splice(Number(id.split('')[1]) - 1, 1);
    if (!newSectionValue.length) {
      setSeverity('warning');
      setError('Only element in the row, cannot be deleted');
    } else {
      dispatch(editRowDate({ row, date: newSectionValue }));
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: ' 100%',
        minHeight: '55px',
        alignItems: 'center',
        borderBottom: '1px dotted dimgrey',
      }}
    >
      <Box sx={gridLayoutStyle}>{renderColumns()}</Box>
      {renderControlOfCols()}
    </Box>
  );
};

export const MemoizedSectionsConstructorRowEl = memo(SectionsConstructorRowEl);
