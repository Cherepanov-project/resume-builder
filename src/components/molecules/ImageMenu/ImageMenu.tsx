import { useState, useEffect, useRef } from 'react';
import './ImageMenu.scss';
import { useAppDispatch, useAppSellector } from '@/hooks/cvTemplateHooks';
import { closeImageMenu } from '@/store/landingBuilder/settingsPanelSlice';

type listItemType = { [key: string]: string };

const ImageMenu = () => {
  const dispatch = useAppDispatch();

  const isShown = useAppSellector((state) => state.settingsPanel.imageMenu);

  const [list, setList] = useState<listItemType[]>([]);
  const [curItem, setCurItem] = useState({ url: '', alt: 'Image Alternative' });

  const urlRef = useRef<HTMLInputElement>(null);
  const altRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    let url = '';
    let alt = '';
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
    const request = await fetch('https://jsonplaceholder.typicode.com/photos');
    if (request.ok) {
      const result = await request.json();
      const json = result.slice(0, 20);
      setList(json);
    }
  };

  const handleItem = (item: { [key: string]: string }) => {
    const { url, title } = item;
    setCurItem({ url, alt: title });
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
            <button className="upload-btn" type="button">
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
              <button
                className="apply-btn"
                type="button"
                // onClick={() => handleApply(curItem)}
              >
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
