import { Link } from "react-router-dom";
import NavLink from "../../atoms/NavLink";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./NavLink.module.scss";

const HeaderNav = () => {
  const [activeLink, setActiveLink] = useState("constructor");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/landing-builder":
        setActiveLink("constructor");
        break;
      case "/landing-builder/saved-letters":
        setActiveLink("saved");
        break;
    }
  }, [location]);

  const isActive = (str: string) => {
    if (activeLink === str) return true;

    return false;
  };
  return (
    <nav className={classes["header-nav"]}>
      <ul className={classes["header-nav-list"]}>
        <Link to="/landing-builder">
          <NavLink label="">
            <span
              onClick={() => setActiveLink("constructor")}
              className={isActive("constructor") ? classes["active-link"] : ""}
            >
              Constructor
            </span>
          </NavLink>
        </Link>
        <Link to="/landing-builder/saved-letters">
          <NavLink label="">
            <span
              onClick={() => setActiveLink("saved")}
              className={isActive("saved") ? classes["active-link"] : ""}
            >
              Saved Letters
            </span>
          </NavLink>
        </Link>
        {/* <NavLink label="Reserved" />
        <NavLink label="Reserved" /> */}
      </ul>
    </nav>
  );
};

export default HeaderNav;
