import { FC } from 'react';
import { IColumn } from '../../../types/landingBuilder';
import { LandigBuilderAddButton } from '../../atoms/LandigBuilderAddButton/LandigBuilderAddButton';
import WorkSpaceElements from '../WorkSpaceElements';
import classes from './WorkSpaceColumns.module.scss';

interface IWorkSpaceColumnsProps {
  columns: IColumn[];
  columnStyle: { width: string };
}
const WorkSpaceColumns: FC<IWorkSpaceColumnsProps> = ({ columns, columnStyle }) => {
  const renderedArr = columns.map((el) => {
    return (
      <div style={columnStyle} className={classes.column} key={el.id}>
        <LandigBuilderAddButton name={el.id} />
        <WorkSpaceElements elements={el.elements} />
      </div>
    );
  });

  return <div className={classes.grid}>{renderedArr}</div>;
};

export default WorkSpaceColumns;
