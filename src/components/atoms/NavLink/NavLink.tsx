import { FC } from "react";

import classes from "./DefaultButton.module.scss";

interface INavLinkProps {
  label: string;
}

const NavLink: FC<INavLinkProps> = (props) => {
  return <li className={classes['nav-link']}><a href="#">{props.label}</a></li>
}

export default NavLink