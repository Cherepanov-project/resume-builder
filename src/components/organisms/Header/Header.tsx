import HeaderNav from "../../molecules/HeaderNav";
import LoginButtonsContainer from "../../molecules/LoginButtonsContainer";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderNav />
      <LoginButtonsContainer />
    </header>
  );
};

export default Header;
