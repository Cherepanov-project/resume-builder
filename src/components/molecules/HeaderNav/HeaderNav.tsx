import { Link } from 'react-router-dom';
import NavLink from '../../atoms/NavLink';

import classes from './NavLink.module.scss';

const HeaderNav = () => {
  return (
    <nav className={classes['header-nav']}>
      <ul className={classes['header-nav-list']}>
        <Link to="/landing-builder">
          <NavLink label="Constructor" />
        </Link>
        <NavLink label="Reserved" />
        <NavLink label="Reserved" />
        <NavLink label="Reserved" />
      </ul>
    </nav>
  );
};

export default HeaderNav;
