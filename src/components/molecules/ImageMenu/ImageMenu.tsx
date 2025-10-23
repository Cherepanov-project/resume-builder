import { useState, useEffect, useRef } from "react";
import "./ImageMenu.scss";
import { useAppDispatch, useTypedSelector } from "@/hooks/cvTemplateHooks";
import { closeImageMenu } from "@/store/landingBuilder/settingsPanelSlice";

type listItemType = { url: string; title: string };

const ImageMenu = () => {
  const dispatch = useAppDispatch();

  const isShown = useTypedSelector((state) => state.settingsPanel.imageMenu);

  const [list, setList] = useState<listItemType[]>([]);
  const [curItem, setCurItem] = useState({ url: "", alt: "Image Alternative" });

  const urlRef = useRef<HTMLInputElement>(null);
  const altRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    let url = "";
    let alt = "";
    if (urlRef.current !== null) {
      url = urlRef.current.value;
    }
    if (altRef.current !== null) {
      alt = altRef.current.value;
    }
    setCurItem({
      url: url,
      alt: alt,
    });
  };

  const getList = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (request.ok) {
      const result = await request.json();
      const json = result.slice(0, 20);
      setList(json);
    }
  };

  const handleItem = (item: listItemType) => {
    const { url, title } = item;
    setCurItem({ url, alt: title });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result ?? "");
      const title = file.name;
      setList((prev) => [{ url, title }, ...prev]);
      setCurItem({ url, alt: title });
      if (urlRef.current) urlRef.current.value = url;
      if (altRef.current) altRef.current.value = title;
    };
    reader.readAsDataURL(file);
    e.currentTarget.value = "";
  };

  // const handleApply = (item) => {

  // }

  useEffect(() => {
    getList();
  }, []);

  const renderImages = () => {
    if (list !== null)
      return list.map((item) => {
        return (
          <li key={item.url} onClick={() => handleItem(item)}>
            <img src={item.url} alt={item.title}></img>
          </li>
        );
      });
  };

  return (
    isShown && (
      <div className="confirm-wrapper">
        <div className="confirm-menu">
          <div className="confirm-menu__header">
            <span className="confirm-menu__header__title">Image Gallery</span>
            <div
              className="confirm-menu__header__close-btn"
              onClick={() => dispatch(closeImageMenu())}
            >
              x
            </div>
          </div>
          <div className="confirm-menu__content">
            <div className="confirm-menu__content__image-src">
              <label>
                Image URL
                <input
                  ref={urlRef}
                  type="url"
                  onChange={() => handleChange()}
                  value={curItem.url}
                ></input>
              </label>
              <label>
                Image alt
                <input
                  ref={altRef}
                  type="text"
                  onChange={() => handleChange()}
                  value={curItem.alt}
                ></input>
              </label>
              {<img src={curItem.url} alt={curItem.alt}></img>}
            </div>
            <div className="confirm-menu__content__images">
              <ul>{renderImages()}</ul>
            </div>
          </div>
          <div className="confirm-menu__bottom-btns">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              className="upload-btn"
              type="button"
              onClick={() => fileInputRef.current?.click()}
            >
              UPLOAD IMAGE
            </button>
            <div className="confirm-menu__bottom-btns__confirm">
              <button
                className="cancel-btn"
                type="button"
                onClick={() => dispatch(closeImageMenu())}
              >
                CANCEL
              </button>
              <button className="apply-btn" type="button">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ImageMenu;
