import React, { FC } from 'react';

import classes from './NavLink.module.scss';

interface INavLinkProps {
  children?: React.ReactNode;
  label: string;
}

const NavLink: FC<INavLinkProps> = (props) => {
  return (
    <li className={classes['nav-link']}>
      {props.children} {props.label}
    </li>
  );
};

export default NavLink;
