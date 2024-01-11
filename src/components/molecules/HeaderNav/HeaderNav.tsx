import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo";
import NavLink from "../../atoms/NavLink";

import classes from "./NavLink.module.scss";

const HeaderNav = () => {
  return (
    <nav className={classes["header-nav"]}>
      <Logo />
      <ul className={classes["header-nav-list"]}>
        <Link to='/'>
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
