import SideBar from '@organisms/SideBar';
import WorkSpace from '@organisms/WorkSpace';

import SectionsManager from '@/components/organisms/SectionsManager';
import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';

import classes from './LandingBuilder.module.scss';
import TemplateManager from '@/components/organisms/TemplateManager';

const LandingBuilder = () => {
  return (
    <main className={classes.landing}>
      <SideBar />
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        <Route path="/sections-creator" element={<SectionsManager />} />
        <Route path="/template-creator" element={<TemplateManager />} />
      </Routes>
    </main>
  );
};

export default LandingBuilder;
