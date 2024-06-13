import SideBar from '@organisms/SideBar';

import { Outlet } from 'react-router-dom';

import classes from './LandingBuilder.module.scss';
import SettingsPanel from '@/components/molecules/SettingsPanel';
import ImageMenu from '@/components/molecules/ImageMenu';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/userSlice';


const LandingBuilder = () => {
  const dispatch  = useDispatch();
  const { user } = useAuth0();
  
  if(user){
    dispatch(setUser(user));
  }
  
  return (
    <main className={classes.landing}>
      <SideBar />
      <Outlet />
      <SettingsPanel />
      <ImageMenu />
    </main>
  );
};

export default LandingBuilder;
