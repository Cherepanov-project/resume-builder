import PromoSection from "../../molecules/PromoSection";
import Slider from "../../molecules/Slider";

const MainPage = () => {
  return (
    <main>
      <PromoSection />
      <div style={{width: '100vw'}}>
        <Slider />
      </div>
    </main>
  );
};

export default MainPage;
