import FAQAccordeon from "../../components/molecules/FAQAccordeon";
import PromoSection from "../../components/molecules/PromoSection";
import Slider from "../../components/molecules/Slider";

import classes from "./MainPage.module.scss"

const MainPage = () => {
  return (
    <main>
      <PromoSection />
      <div className={classes['slider-container']}>
        <Slider />
      </div>
      <FAQAccordeon></FAQAccordeon>
    </main>
  );
};

export default MainPage;
