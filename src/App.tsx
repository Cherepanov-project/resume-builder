import WorkSpace from "@organisms/WorkSpace";
import LandingPreview from "@pages/LandingPreview";
import { Route, Routes } from "react-router-dom";
// import { ProtectedRoute } from "./components/atoms/ProtectedRoute/ProtectedRoute.tsx";
import SectionsManager from "./components/organisms/SectionsManager";
import SavedLetters from "./components/organisms/SavedLetters";
import TemplateManager from "./components/organisms/TemplateManager";
// import AuthPage from "./pages/AuthPage";
import CvTemplate from "./pages/CvTemplate";
import IntroPage from "./pages/IntroPage";
import LandingBuilder from "./pages/LandingBuilder";
import { LandingBuilderStartPage } from "./pages/LandingBuilderStartPage copy";
import EmailPage from "./pages/LetterBuilderPage/EmailPage.tsx";
import LetterBuilderPage from "./pages/LetterBuilderPage/LetterBuilderPage.tsx";
import NotFoundPage from "./pages/NotFoundPage";
import StarterPage from "./pages/StarterPage";
import LetterConstructorPage from "./pages/LetterConstructorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StarterPage />} />
        {/* <Route path="/sign-in" element={<AuthPage />} />
        <Route path="/sign-up" element={<AuthPage />} /> */}
        <Route path="/intro" index element={<IntroPage />} />
        <Route path="/letter-builder-page" element={<LetterBuilderPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/landing-builder-start-page" element={<LandingBuilderStartPage />} />
        <Route path="/landing-builder" element={<LandingBuilder />}>
          <Route index element={<WorkSpace />} />
          <Route path="/landing-builder/sections-creator" element={<SectionsManager />} />
          <Route path="/landing-builder/template-creator" element={<TemplateManager />} />
          <Route path="/landing-builder/saved-letters" element={<SavedLetters />} />
        </Route>
        <Route path="/landing-preview" element={<LandingPreview />} />
        <Route path="/resume-builder" element={<CvTemplate />} />
        <Route
          path="/landing-letter-constructor-page"
          element={<ProtectedRoute component={LetterConstructorPage} />}
        />
        <Route path="/landing-preview" element={<ProtectedRoute component={LandingPreview} />} />
        <Route path="/resume-builder" element={<ProtectedRoute component={CvTemplate} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
