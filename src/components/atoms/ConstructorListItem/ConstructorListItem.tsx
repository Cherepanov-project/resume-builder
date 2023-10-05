import { FC } from 'react';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

// import classes from './ConstructorListItem.module.scss'
import { useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { openEdit, openPopover } from '../../../store/LandigBuilder/previewElementsSlice';

interface IConstructrListItem {
  label: string;
  appointment?: string;
  preset?: string;
}

const ConstructorListItem: FC<IConstructrListItem> = ({ label, appointment, preset }) => {
  const dispatch = useAppDispatch();
  const onHandleClick = () => {
    if (appointment === 'preset') {
      dispatch(openEdit(preset));
    } else {
      dispatch(openPopover(label));
    }
  };

  return <ListItemButton onClick={onHandleClick}>{label}</ListItemButton>;
};

export default ConstructorListItem;
