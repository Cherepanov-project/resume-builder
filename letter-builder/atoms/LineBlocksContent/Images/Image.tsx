import { useAppDispatch, useAppSelector } from "@/store/store";
import { addImage, deleteImage } from "../../../reducers/imageSlice";
import { useState } from "react";
import { TextField } from "@mui/material";
import s from "./image.module.css";

const Image = () => {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.images.images);
  const [value, setValue] = useState("");

  const handleAddImage = () => {
    if (value.trim()) {
      dispatch(addImage({ url: value }));
      setValue("");
    }
  };

  return (
    <div>
      <div className={s.wrapper}>
        {images.length > 0 ? (
          images.map((img) => (
            <div key={img.id} className={s.image}>
              <img src={img.url} alt="Your picture should have been here" />
              <button
                className={s.deleteBtn}
                onClick={() => dispatch(deleteImage(img.id))}
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <div>Добавьте изображение</div>
        )}
      </div>

      {images.length === 0 && (
        <div className={s.wrapperInput}>
          <TextField
            type="text"
            label="Enter image URL"
            className={s.input}
            value={value}
            style={{ marginBottom: "8px" }}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddImage()}
          />
          <button
            className={s.button}
            onClick={handleAddImage}
            disabled={!value.trim()}
          >
            Add image
          </button>
        </div>
      )}
    </div>
  );
};

export default Image;
