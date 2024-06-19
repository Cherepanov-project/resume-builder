// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/organisms/Header';
// import CvTemplatesPage from './pages/CvTemplatePage';
// import LandingBuilder from './pages/LandingBuilder';
// import SliderSV from './components/molecules/SliderSV';
import CvTemplate from './pages/CvTemplate';
import StarterPage from './pages/StarterPage';
import { Route, Routes } from 'react-router-dom';
// import SliderSV from './components/molecules/SliderSV';
// import CvTemplate from './pages/CvTemplate';
import Header from './components/organisms/Header';
import LandingBuilder from './pages/LandingBuilder';
import AuthPage from './pages/AuthPage';
// import StarterPage from './pages/StarterPage';
import SectionsManager from './components/organisms/SectionsManager';
import TemplateManager from './components/organisms/TemplateManager';
import IntroPage from './pages/IntroPage';
import NotFoundPage from './pages/NotFoundPage';
import WorkSpace from '@organisms/WorkSpace';
import LandingPreview from '@pages/LandingPreview';
import { LandingBuilderStartPage } from './pages/LandingBuilderStartPage copy';
import { ProtectedRoute } from './components/atoms/ProtectedRoute/ProtectedRoute.tsx'

function App() {
  const builderAndHeader = 
  <>
    <Header />
    <LandingBuilder />
  </>
  
  return (
    <>
      <Routes>
        <Route path="/" element={<StarterPage />} />
          <Route path="/sign-in" element={<AuthPage />} />
          <Route path="/sign-up" element={<AuthPage />} />
          <Route path="/intro" element={<ProtectedRoute component={IntroPage} />} />
          <Route path="/landing-builder-start-page" element={<ProtectedRoute component={LandingBuilderStartPage} />} />
          <Route path="/landing-builder" element={<ProtectedRoute component={ builderAndHeader } />} >
            <Route index element={<ProtectedRoute component={WorkSpace} />} />
            <Route path="/landing-builder/sections-creator" element={<ProtectedRoute component={SectionsManager} />} />
            <Route path="/landing-builder/template-creator" element={<ProtectedRoute component={TemplateManager} />} />
          </Route>
        <Route path="/landing-preview" element={<ProtectedRoute component={LandingPreview} />} />
        <Route path="/resume-builder" element={<ProtectedRoute component={CvTemplate} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
