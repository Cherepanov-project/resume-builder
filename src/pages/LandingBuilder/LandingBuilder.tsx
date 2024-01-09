import SideBar from '@organisms/SideBar';
import WorkSpace from '@organisms/WorkSpace';

import SectionsManager from '@/components/organisms/SectionsManager';
import { Route, Routes } from 'react-router-dom';

import classes from './LandingBuilder.module.scss';
import TemplateManager from '@/components/organisms/TemplateManager';
import SettingsPanel from '@/components/molecules/SettingsPanel';
import ImageMenu from '@/components/molecules/ImageMenu';

const LandingBuilder = () => {

  return (
    <main className={classes.landing}>
      <SideBar />
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        <Route path="/sections-creator" element={<SectionsManager />} />
        <Route path="/template-creator" element={<TemplateManager />} />
      </Routes>
      <SettingsPanel />
      <ImageMenu />
    </main>
  );
};

export default LandingBuilder;
