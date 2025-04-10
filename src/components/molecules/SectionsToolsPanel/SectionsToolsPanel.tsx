import { Box, ToggleButtonGroup, ToggleButton, Divider, Button } from '@mui/material';
import MemoizedElementSettings from '../ElementSpecificSettings';
import SectionSpecificSettings from '../SectionSpecificSettings';
import { useState } from 'react';
import { T_BlockElement, T_SectionElements } from '@/types/landingBuilder';
import { handleSettingsMenu, setLayoutDate } from '@/store/landingBuilder/sectionsManagerSlice';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';

interface Props {
  setError: (message: string) => void;
  setSeverity: (type:'success' | 'error' | 'warning') => void;
}

const SectionsToolsPanel: React.FC<Props> = ({ setError, setSeverity }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Headers');
  const dispatch = useDispatch();
  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const rows = Object.keys(layoutDate).length;
  const submitSection = () => {
    const arr: T_BlockElement[] = [];
    const data = Object.values(layoutDate);

    for (let i = 0; i < data.length; i++) {
      arr.push(...data[i]);
    }

    const filteredArr = arr.filter((el) => el.name);
    const elements = filteredArr.map((el) => {
      console.log(el, el.layout.i, el.layout.i.slice(0, 1));
      return {
        name: el.name,
        source: 'atoms',
        layout: {
          i: String(el.layout.i),
          x: calcX(Number(String(el.layout.i).slice(0, 1)), Number(String(el.layout.i).slice(1))),
          y: calcY(Number(String(el.layout.i).slice(0, 1))), // el.y,
          w: el.layout.w,
          h: el.layout.h,
        },
        props: el.props,
      };
    });

    const section: T_SectionElements = {
      name: 'ContainerDIV', 
      title: name, 
      type, 
      columns: 6,
      source: 'atoms', 
      children: elements,
      layout: { i: '', x: 0, y: 0, w: 6, h: calcSectionH() + 1 }, 
    };

    if (name.trim()) {
      if (postNewSection(section)) {
        setSeverity('success');
        setError(`Section ${name} was added to ${type}`);
        dispatch(
          setLayoutDate({
            1: [
              {
                name: '',
                type: '',
                source: 'atoms',
                props: {
                  text: '',
                  key: '',
                  wrapperStyle: { display: 'block' },
                  textStyle: { display: 'block' },
                  style: { '': '' },
                },
                layout: { i: '11', x: 0, y: 0, w: 1, h: 1 },
              },
            ],
          }),
        );
        setName('');
        dispatch(handleSettingsMenu({ type: 'UPDATE_ID', value: '11' }));
      }
    } else {
      setSeverity('error');
      setError(`Section is missing a name`);
    }
  };
  
  const postNewSection = (newSection: T_SectionElements) => {
    const ls = localStorage.getItem('sections');
    if (ls) {
      const prevLs: Storage = JSON.parse(ls);
      const newStore = JSON.parse(JSON.stringify(prevLs));
      for (const module of Object.values(prevLs)) {
        if (module.name === type) {
          for (let i = 0; i < module.list.length; i++) {
            if (module.list[i].title === newSection.title) {
              setSeverity('warning');
              setError(`Section named ${name} is already present in ${type}`);
              return false;
            }
          }
          const lastList = module.list;
          const newList = [...lastList, newSection];
          const idx = newStore.findIndex((el: { name: string }) => el.name === type);
          newStore[idx].list = newList;
          localStorage.setItem('sections', JSON.stringify(newStore));
          return true;
        }
      }
      newStore.push({ name: type, list: [newSection] });
      localStorage.setItem('sections', JSON.stringify(newStore));
      return true;
    } else {
      const newStore = [{ name: type, list: [newSection] }];
      localStorage.setItem('sections', JSON.stringify(newStore));
      return true;
    }
  };

  const calcX = (row: number, col: number) => {
    if (col !== 1) {
      let sum = 0;
      for (let i = 1; i < col; i++) {
        sum += layoutDate[row][i - 1].layout.w;
      }
      return sum;
    } else {
      return 0;
    }
  };

  const calcY = (row: number) => {
    if (row > 1) {
      let x = 1;
      console.log(layoutDate, row);
      for (let i = 0; i < layoutDate[row - 1].length; i++) {
        if (layoutDate[row - 1][i].layout.h > x) {
          x = layoutDate[row - 1][i].layout.h;
        }
      }
      return x;
    } else {
      return 0;
    }
  };

  const calcSectionH = () => {
    let h = 0;
    for (let i = 1; i <= rows; i++) {
      let max = 1;
      for (let n = 0; n < layoutDate[i].length; n++) {
        if (layoutDate[i][n].layout.h > max) {
          max = layoutDate[i][n].layout.h;
        }
      }
      h += max;
    }
    return h;
  };
  const [toggleMenu, setToggleMenu] = useState<unknown>('SECTION_SETTINGS');

  const handleToggleMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    switch (target.innerText) {
      case 'ELEMENTS SETTINGS':
        return setToggleMenu('ELEMENTS_SETTINGS');
      default:
        return setToggleMenu('SECTION_SETTINGS');
    }
  };
  return (
    <Box sx={{ width: '300px' }}>
      <h2>Create Section</h2>

      <ToggleButtonGroup color="primary" size="small" exclusive aria-label="settings-category">
        <ToggleButton value="section" aria-label="settings-section" onClick={handleToggleMenu}>
          Section settings
        </ToggleButton>
        <ToggleButton
          value="element-settings"
          aria-label="settings-segment"
          onClick={handleToggleMenu}
        >
          Elements settings
        </ToggleButton>
      </ToggleButtonGroup>
      {toggleMenu === 'SECTION_SETTINGS' ? (
        <SectionSpecificSettings type={type} setType={setType} name={name} setName={setName} />
      ) : null}
      {toggleMenu === 'ELEMENTS_SETTINGS' ? <MemoizedElementSettings /> : null}

      <Divider />
      <Button
        type="button"
        variant="outlined"
        sx={{ width: '70%', mt: '10px' }}
        onClick={() => submitSection()}
      >
        Save section
      </Button>
    </Box>
  );
};

export default SectionsToolsPanel;
