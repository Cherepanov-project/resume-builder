import { useAppDispatch, useAppSelector } from "@/store/store";
import { addImage, deleteImage } from "../../../reducers/imageSlice";
import { useState } from "react";

import { TextField, Button } from "@mui/material";
import { buttonStyle } from "@/assets/style/buttonStyle";



import s from "./image.module.css";

const Image = () => {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.images.images);
  const [value, setValue] = useState("");

  const element =
    images.length > 0
      ? images.map((img) => {
          return (
            <div key={img.id} className={s.image}>
              <img src={img.url} alt="Your picture should have been here"></img>
              <button
                className={s.deleteBtn}
                onClick={() => {
                  dispatch(deleteImage(img.id));
                }}
              >
                &times;
              </button>
            </div>
          );
        })
      : null;

  return (
    <div>
      <div className={s.wrapper}>{element}</div>
      <div className={s.wrapperInput}>
        <TextField
          type="text"
          label="Enter image URL"
          className={s.input}
          value={value}
          style={{ marginBottom: "8px" }}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          sx={{ ...buttonStyle, display: "block", mx: "auto" }}
          onClick={() => {
            dispatch(addImage({ url: value }));
            setValue("");
          }}
        >
          {" "}
          add image{" "}
        </Button>
      </div>
    </div>
  );
};

export const ImageEmailView = ({ images }: { images: { id: string; url: string }[] }) => {
  if (!images || images.length === 0) return null;

  return (
    <>
      {images.map((img) => (
        <img key={img.id} src={img.url} alt="image" style={{ maxWidth: "100%", height: "auto" }} />
      ))}
    </>
  );
};

export default Image;
