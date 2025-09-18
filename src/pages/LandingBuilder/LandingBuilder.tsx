import SideBar from "@organisms/SideBar";
import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";

import classes from "./LandingBuilder.module.scss";
import SettingsPanel from "@/components/molecules/SettingsPanel";
import ImageMenu from "@/components/molecules/ImageMenu";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import Header from "@/components/organisms/Header";

const LandingBuilder = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const isSavedLettersPage = location.pathname === "/landing-builder/saved-letters";

  if (user) {
    dispatch(setUser(user));
  }

  return (
    <main className={classes.landing}>
      <Header />
      {!isSavedLettersPage && <SideBar />}
      <Outlet />
      <SettingsPanel />
      <ImageMenu />
    </main>
  );
};

export default LandingBuilder;
