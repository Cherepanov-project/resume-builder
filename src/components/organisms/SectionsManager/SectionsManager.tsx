import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack } from '@mui/material';
import { AddSharp, Close, EditSharp, RemoveSharp } from '@mui/icons-material/';

import { setLayoutDate } from '@/store/landingBuilder/sectionsManagerSlice';

import MemoizedSectionsConstructor from '@/components/molecules/SectionsConstructor';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import PreviewButtonsContainer from '@/components/molecules/PreviewButtonsContainer';
import Item from '@/components/atoms/StyledPaperItem';
import SectionsToolsPanel from '@/components/molecules/SectionsToolsPanel/SectionsToolsPanel';
import ErrorPopup from '@/components/atoms/ErrorPopup';

const SectionsManager: FC = () => {
  const dispatch = useDispatch();
  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const rows = Object.keys(layoutDate).length;
  const [error, setError] = useState('');
  const [severity, setSeverity] = useState('warning');

  // Убрать попап после 2 секунд
  if (error) {
    setTimeout(() => {
      setError('');
      setSeverity('warning');
    }, 2000);
  }

  const [visible, setVisible] = useState(['inline-flex', 'none']);
  //Обновление дисплея кнопок ряда
  useEffect(() => {
    if (rows >= 5) {
      setVisible(['none', 'inline-flex']);
    } else if (rows <= 1) {
      setVisible(['inline-flex', 'none']);
    } else {
      setVisible(['inline-flex', 'inline-flex']);
    }
  }, [rows]);

  // Добавление ряда
  const addRow = () => {
    if (rows < 5) {
      const id = String(rows + 1) + 1;
      const newRow = [
        {
          name: '',
          type: '',
          source: 'atoms',
          props: {
            key: '',
            wrapperStyle: { display: 'block' },
            textStyle: { display: 'block' },
          },
          layout: { i: id, x: 0, y: 0, w: 1, h: 1 },
        },
      ];
      dispatch(setLayoutDate({ ...layoutDate, [rows + 1]: newRow }));
    }
  };

  // удаление ряда
  const removeRow = () => {
    if (rows > 1) {
      const newLayoutDate = JSON.parse(JSON.stringify(layoutDate));
      delete newLayoutDate[rows];
      dispatch(setLayoutDate(newLayoutDate));
    } else {
      setVisible(['inline-flex', 'none']);
    }
  };

  const actions = [
    { icon: <AddSharp />, name: 'Add', onClick: addRow, visible: visible[0] },
    { icon: <RemoveSharp />, name: 'Remove', onClick: removeRow, visible: visible[1] },
  ];

  return (
    <Box
      sx={{
        p: '0 30px 0 56px',
        minHeight: '100vh',
        minWidth: '1520px',
      }}
    >
      {error ? <ErrorPopup message={error} severity={severity} /> : null}
      <Stack
        direction="row"
        sx={{
          minHeight: '100%',
        }}
      >
        <Item sx={{ height: '100%' }}>
          <SectionsToolsPanel setError={setError} setSeverity={setSeverity} />
        </Item>
        <Item sx={{ height: '100vh', width: '100%', backgroundColor: '#eaf9f4' }}>
          <div>
            <h2>WORKSPACE</h2>
          </div>
          <MemoizedSectionsConstructor setError={setError} setSeverity={setSeverity} />
          <Box
            sx={{
              display: 'inline-flex',
              m: '10px',
              width: '100%',
              justifyContent: 'space-evenly',
            }}
          >
            <Box sx={{ transform: 'translateZ(0px)' }}>
              <SpeedDial
                sx={{
                  opacity: '0.2',
                  '& .MuiFab-primary': { width: 36, height: 36 },
                  '&:hover': {
                    opacity: '1',
                  },
                }}
                direction="down"
                ariaLabel="Control of rows"
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
            <PreviewButtonsContainer label="Preview Section" preview="section" />
          </Box>
        </Item>
      </Stack>
    </Box>
  );
};

export default SectionsManager;
