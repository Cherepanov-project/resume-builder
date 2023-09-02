import { FC } from "react";

import classes from "./NavLink.module.scss";

interface INavLinkProps {
  label: string;
}

const NavLink: FC<INavLinkProps> = (props) => {
  return <li className={classes["nav-link"]}>{props.label}</li>;
};

export default NavLink;
