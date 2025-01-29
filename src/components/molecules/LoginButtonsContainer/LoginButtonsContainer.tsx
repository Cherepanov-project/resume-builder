import DefaultButton from "@atoms/DefaultButton";

import classes from "./LoginButtonsContainer.module.scss";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { resetUser } from "@/store/userSlice";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";

const LoginButtonsContainer = () => {
  const user = useTypedSelector((state)=> state.user.user);
  const dispatch = useDispatch();
  const { loginWithRedirect, logout, } = useAuth0();

  const customLogOut = ():void => {
    dispatch(resetUser());
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  const loginBut = <DefaultButton label="Sign In" onClick={() => {loginWithRedirect()}} />;
  const logoutBut = <DefaultButton label="Log Out"  onClick={customLogOut}/>;

  const inOutButton = user.name ? logoutBut : loginBut;
  return (
    <div className={classes['login-btn-container']}>
      {inOutButton}
      <DefaultButton label="Get Started" primary />
    </div>
  );
};

export default LoginButtonsContainer;
