import { useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { ISection } from '../../../types/landingBuilder';
import { addSection } from '../../../store/LandigBuilder/landingBuilder';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material/';
import { nanoid } from 'nanoid';

const AddSectionSideBar = () => {
  const dispatch = useAppDispatch();

  const makeSection = (id: string): ISection => {
    return {
      i: id,
      x: 0,
      y: 0,
      w: 10,
      h: 3,
      minW: 1,
      maxW: 15,
      columns: [{ id: id + 'col', elements: [] }],
      columnStyle: { width: '100px' },
    };
  };

  return (
    <List>
      <ListItem>
        <ListItemButton onClick={() => dispatch(addSection(makeSection('section' + nanoid(4))))}>
          <ListItemText primary="Empty section" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default AddSectionSideBar;
