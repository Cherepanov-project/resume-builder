import { FC } from 'react';
import { IElement } from '../../../types/landingBuilder';
import ListItemButton from '@mui/material/ListItemButton';

import { useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { openEdit } from '../../../store/LandigBuilder/previewElementsSlice';

interface IConstructrListItem {
  label: string;
  appointment?: string;
  preset?: IElement;
}

export const ConstructorListItem: FC<IConstructrListItem> = ({ label, appointment, preset }) => {
  const dispatch = useAppDispatch();
  const onHandleClick = () => {
    if (appointment === 'preset') {
      dispatch(openEdit(preset));
    }
  };

  return <ListItemButton onClick={onHandleClick}>{label}</ListItemButton>;
};
