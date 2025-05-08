import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import image1 from "../../../letter-builder/assets/images/carouselDefaultSlides/slide1.png";
import image2 from "../../../letter-builder/assets/images/carouselDefaultSlides/slide2.png";
import image3 from "../../../letter-builder/assets/images/carouselDefaultSlides/slide3.png";

type Image = {
  id: string;
  url: string;
};

type Carousel = {
  id: string;
  images: Image[];
};

type CarouselState = {
  carousels: Carousel[];
};

const initialState: CarouselState = {
  carousels: [],
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    addCarousel: (state, action: PayloadAction<string>) => {
      const newCarousel = {
        id: action.payload,
        images: [
          { id: nanoid(), url: image1 },
          { id: nanoid(), url: image2 },
          { id: nanoid(), url: image3 },
        ],
      };
      state.carousels.push(newCarousel);
    },
    removeCarousel: (state, action: PayloadAction<string>) => {
      state.carousels = state.carousels.filter(c => c.id !== action.payload);
    },
    addImage: (
      state,
      action: PayloadAction<{
        carouselId: string;
        url: string;
      }>
    ) => {
      const carousel = state.carousels.find(c => c.id === action.payload.carouselId);
      if (carousel) {
        carousel.images.push({
          id: nanoid(),
          url: action.payload.url,
        });
      }
    },
    deleteImage: (
      state,
      action: PayloadAction<{
        carouselId: string;
        imageId: string;
      }>
    ) => {
      const carousel = state.carousels.find(c => c.id === action.payload.carouselId);
      if (carousel) {
        carousel.images = carousel.images.filter(
          img => img.id !== action.payload.imageId
        );
      }
    },
  },
});

export const { addCarousel, removeCarousel, addImage, deleteImage } = carouselSlice.actions;
export default carouselSlice.reducer;
