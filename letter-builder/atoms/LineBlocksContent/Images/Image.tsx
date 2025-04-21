import { useAppDispatch, useAppSelector } from "@/store/store";
import { addImage, deleteImage } from "../../../reducers/imageSlice";
import { useState } from "react";
import { TextField } from "@mui/material";

import s from "./image.module.css";

const Image = () => {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.images.images);
  const [value, setValue] = useState("");

  const element =
    images.length > 0
      ? images.map((img) => {
          return (
            <div className={s.image}>
              <img key={img.id} src={img.url}></img>
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
        <button
          className={s.button}
          onClick={() => {
            dispatch(addImage({ url: value }));
          }}
        >
          {" "}
          add image{" "}
        </button>
      </div>
    </div>
  );
};

export default Image;
