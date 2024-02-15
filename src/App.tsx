// import SliderSV from './components/molecules/SliderSV';
// import CvTemplate from './pages/CvTemplate';
import Header from './components/organisms/Header';
import LandingBuilder from './pages/LandingBuilder';
import { Route, Routes } from 'react-router-dom';
import LandingPreview from '@pages/LandingPreview';
import WorkSpace from '@organisms/WorkSpace';
import SectionsManager from '@organisms/SectionsManager';
import TemplateManager from '@organisms/TemplateManager';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingBuilder />
            </>
          }
        >
          <Route index element={<WorkSpace />} />
          <Route path="/sections-creator" element={<SectionsManager />} />
          <Route path="/template-creator" element={<TemplateManager />} />
        </Route>
        <Route path="/landing-preview" element={<LandingPreview />} />
      </Routes>
    </>
  );
}

export default App;
