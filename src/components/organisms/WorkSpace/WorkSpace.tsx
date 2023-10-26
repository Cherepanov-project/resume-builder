import ResponsiveGridLayout from 'react-grid-layout';
import { useAppSellector } from '../../../hooks/cvTemplateHooks';
import { LandigBuilderAddButton } from '../../atoms/LandigBuilderAddButton/LandigBuilderAddButton';
import classes from './WorkSpace.module.scss';
import WorkSpaceColumns from '../../molecules/WorkSpaceColumns';

const WorkSpace = () => {
  const width = window.innerWidth;
  const workSpaceArr = useAppSellector((state) => state.landigBuilder.workSpace);
  const layout = workSpaceArr.map(({ i, x, y, w, h, minW, maxW }) => {
    return { i, x, y, w, h, minW, maxW };
  });
  const renderedArr = workSpaceArr.map((section) => {
    return (
      <div
        className={classes['section']}
        style={{ backgroundColor: 'white', border: '1px solid black' }}
        key={section.i}
      >
        <LandigBuilderAddButton name={section.i} />
        <WorkSpaceColumns columns={section.columns} columnStyle={section.columnStyle} />
      </div>
    );
  });
  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      cols={10}
      rowHeight={220}
      width={width - 100}
    >
      {renderedArr}
    </ResponsiveGridLayout>
  );
};

export default WorkSpace;
