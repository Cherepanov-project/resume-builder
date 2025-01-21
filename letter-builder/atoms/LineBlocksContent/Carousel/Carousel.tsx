import { IconPngCarousel } from "@components/atoms/Icons/LetterCardIcons";

const CarouselComponent = () => {
  return (
    <div className="text-base text-[#515659]">
      <div className="flex items-center justify-center">
        <IconPngCarousel scale={2} />
      </div>
      Карусель
    </div>
  );
};

export default CarouselComponent;
