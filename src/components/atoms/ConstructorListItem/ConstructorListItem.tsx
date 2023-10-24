import { FC } from 'react';
import { IElement } from '../../../types/landingBuilder';
import ListItemButton from '@mui/material/ListItemButton';

import { useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { edit } from '../../../store/LandigBuilder/landingBuilder';

interface IConstructrListItemProps {
  label: string;
  preset?: IElement;
}

export const ConstructorListItem: FC<IConstructrListItemProps> = ({ label, preset }) => {
  const dispatch = useAppDispatch();
  const onHandleClick = () => {
    dispatch(edit(preset));
  };

  return <ListItemButton onClick={onHandleClick}>{label}</ListItemButton>;
};
