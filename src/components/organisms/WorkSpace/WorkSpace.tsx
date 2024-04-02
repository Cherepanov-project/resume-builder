import { GridContainers } from '@store/landingBuilder/layoutSlice';
import { useAppSellector } from '@hooks/cvTemplateHooks';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import classes from './WorkSpace.module.scss';
import { GridContainer } from '../GridContainer/GridContainer';

// ========================================================================== \\

const WorkSpace: React.FC = () => {
  const gridContainers = useAppSellector((state) => state.layout.gridContainers);
  return (
    <div className={classes['workspace']}>
      <div className={classes['wrapper']}>
        {gridContainers.map((container: GridContainers) => (
          <GridContainer key={container.id} {...container} />
        ))}
      </div>
    </div>
  );
};

export default WorkSpace;
