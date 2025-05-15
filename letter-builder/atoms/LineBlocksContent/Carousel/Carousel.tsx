import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/store";
import { addCarousel, deleteImage } from "@/store/LetterBuilderStore/carouselSlice";
import { useStyleElement } from "../../../hooks/useStyleElement";
import { nanoid } from "nanoid";
import s from "./Carousel.module.scss";

const CarouselComponent = () => {
  const dispatch = useAppDispatch();
  const [carouselId] = useState(nanoid()); //создаем id карусели при монтировании
  const carousel = useAppSelector((state) =>
    state.carousel.carousels?.find((c) => c.id === carouselId),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const { handleOpen } = useStyleElement(carouselId, {}, "carousel");
  const [prevImagesLength, setPrevImagesLength] = useState(0);

  // Инициализация самой карусели
  useEffect(() => {
    dispatch(addCarousel(carouselId));
  }, [dispatch, carouselId]);

  // Отслеживаем изменения количества изображений
  useEffect(() => {
    if (!carousel) return;

    const currentLength = carousel.images.length;

    // если изображений не было и появились-показываем первое
    if (prevImagesLength === 0 && currentLength > 0) {
      setCurrentIndex(0);
    }
    // если добавили новое - показываем последне
    else if (currentLength > prevImagesLength) {
      setCurrentIndex(currentLength - 1);
    }
    // если удалили какое-то - корректируем индекс, если он стал невалидным
    else if (currentIndex >= currentLength && currentLength > 0) {
      setCurrentIndex(currentLength - 1);
    }

    setPrevImagesLength(currentLength);
  }, [carousel?.images.length, carousel, currentIndex, prevImagesLength]);

  const nextSlide = () => {
    if (!carousel) return;
    setCurrentIndex((prevIndex) => (prevIndex === carousel.images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    if (!carousel) return;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carousel.images.length - 1 : prevIndex - 1));
  };

  const handleDeleteImage = (imageId: string) => {
    dispatch(deleteImage({ carouselId, imageId }));
  };

  if (!carousel || carousel.images.length === 0) {
    return <div>Добавьте изображения в карусель</div>;
  }

  return (
    <div>
      <div className={s.carouselWrapper} onClick={handleOpen}>
        {carousel.images.length > 1 && (
          <button onClick={prevSlide} className={s.prevButton}>
            &lt;
          </button>
        )}

        <img
          src={carousel.images[currentIndex]?.url}
          alt="Не удалось загрузить изображение"
          className={s.carousel}
        />

        <button
          className={s.deleteBtn}
          onClick={() => handleDeleteImage(carousel.images[currentIndex].id)}
          disabled={carousel.images.length === 1}
        >
          &times;
        </button>

        {carousel.images.length > 1 && (
          <button onClick={nextSlide} className={s.nextButton}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
