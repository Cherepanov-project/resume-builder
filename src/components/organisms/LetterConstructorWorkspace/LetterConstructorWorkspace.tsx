import { IGridContainers } from '@store/landingBuilder/layoutSlice';
import { useTypedSelector } from '@hooks/cvTemplateHooks';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import classes from './LetterConstructorWorkspace.module.scss';
import { GridContainer } from '@organisms/GridContainer';

// ========================================================================== \\

const LetterConstructorWorkspace: React.FC = () => {
  const gridContainers = useTypedSelector((state) => state.layout.gridContainers);
  return (
    <div className={classes['workspace']}>
      <div className={classes['wrapper']}>
        {gridContainers.map((container: IGridContainers) => (
          <GridContainer key={container.id} {...container} />
        ))}
      </div>
    </div>
  );
};

export default LetterConstructorWorkspace;
