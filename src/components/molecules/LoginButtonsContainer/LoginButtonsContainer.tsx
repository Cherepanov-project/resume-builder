import DefaultButton from "../../atoms/DefaultButton";

import classes from "./LoginButtonsContainer.module.scss"

const LoginButtonsContainer = () => {
  return (
    <div className={classes['login-btn-container']}>
      <DefaultButton label="Sign In" />
      <DefaultButton label="Get Started" primary />
    </div>
  );
};

export default LoginButtonsContainer;
