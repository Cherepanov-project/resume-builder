import { FC } from 'react';
import classes from '../../organisms/WorkSpace/WorkSpace.module.scss';
import { useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { sideBar } from '../../../store/landingBuilder/layoutSlice';

interface ILandigBuilderAddButtonProps {
  name: string;
}

export const LandigBuilderAddButton: FC<ILandigBuilderAddButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  const onHandleClick = () => {
    if (props.name.includes('col')) {
      dispatch(sideBar(['editElements', props.name]));
    } else {
      dispatch(sideBar(['editColumns', props.name]));
    }
  };

  const className = props.name.includes('col')
    ? classes['landig-builder-add-btn-alw']
    : classes['landig-builder-add-btn'];

  return (
    <button className={className} name={props.name} onClick={onHandleClick}>
      +
    </button>
  );
};
