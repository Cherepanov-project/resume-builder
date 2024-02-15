import SideBar from '@organisms/SideBar';

import { Outlet } from 'react-router-dom';

import classes from './LandingBuilder.module.scss';
import SettingsPanel from '@/components/molecules/SettingsPanel';
import ImageMenu from '@/components/molecules/ImageMenu';

const LandingBuilder = () => {
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
