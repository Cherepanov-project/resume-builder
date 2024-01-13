import NavLink from '@atoms/NavLink';
import { Link } from 'react-router-dom';
import { EyeFilled } from '@ant-design/icons';

import classes from './PreviewButtonsContainer.module.scss';

const PreviewButtonsContainer = () => {
  return (
    <div>
      <Link to="/landing-preview" target="_blank" className={classes.link}>
        <NavLink label="Preview">
          <EyeFilled />
        </NavLink>
      </Link>
    </div>
  );
};

export default PreviewButtonsContainer;
