import { IconPngCarousel } from "@components/atoms/Icons/LetterCardIcons";

const CarouselComponent = () => {
  return (
    <div style={{ fontSize: "1rem", color: "#515659" }}>
      <div  className="flex justify-center" style={{ marginBottom: "0.5rem" }}>
        <IconPngCarousel scale={2} />
      </div>

      Карусель
    </div>
  );
};

export default CarouselComponent;
