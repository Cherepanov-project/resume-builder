// import SliderSV from './components/molecules/SliderSV';
// import CvTemplate from './pages/CvTemplate';

// import CvTemplate from './pages/CvTemplate';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/organisms/Header';
import CvTemplatesPage from './pages/CvTemplatePage';
import LandingBuilder from './pages/LandingBuilder';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingBuilder />
              </>
            }
          />
          <Route path="/templates" element={<CvTemplatesPage />} />
        </Routes>
      </BrowserRouter>
      {/*<CvTemplate />*/}
    </>
  );
}
export default App;
