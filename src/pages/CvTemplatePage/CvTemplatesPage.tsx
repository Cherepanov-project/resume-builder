import classes from './CvTemplatesPage.module.scss';
import { WelcomeArea } from './Components/WelcomeArea/WelcomeArea';
import Advantages from './Components/Advantages/Advantages.tsx';
import AboutUs from './Components/AboutUs/AboutUs.tsx';
import CustomCv from './Components/CustomCv/CustomCv.tsx';
import { CvTemplates } from './Components/CvTemplates/CvTemplates.tsx';
import Prices from './Components/Prices/Prices.tsx';
import Specifications from './Components/Specifications/Specifications.tsx';
import './style.css';
import Reviews from './Components/Reviews/Reviews.tsx';
import Footer from './Components/Footer/Footer.tsx';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.tsx';
import Header from '../../components/organisms/Header';

const CvTemplatesPage = () => {
  return (
    <div className={classes.container}>
      <ScrollToTop />
      <Header />
      <WelcomeArea />
      <Advantages />
      <AboutUs />
      <CustomCv />
      <Prices />
      <CvTemplates />
      <Specifications />
      <Reviews />
      <Footer />
    </div>
  );
};

export default CvTemplatesPage;
