import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { initImageMenu } from "@/store/landingBuilder/settingsPanelSlice";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

interface IProps {
  setStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
  backgroundColor: string | undefined;
}

const ContainerDIVSettings: React.FC<IProps> = ({ backgroundColor, setStyle }) => {
  const dispatch = useAppDispatch();

  const [image, setImage] = useState("Input URL");
  const [color, setColor] = useState(backgroundColor ? backgroundColor : "#ffffff");
  const [colorOpen, setColorOpen] = useState(false);

  const colorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // вывести в отдельную функцию
    setStyle({
      backgroundColor: color,
      backgroundImage: `url(${image})`, // сделать валидацию urla
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, image]);

  const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleClick = (e: MouseEvent) => {
    if (colorRef.current && !colorRef.current.contains(e.target as Node)) {
      setColorOpen(false);
    }
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const bgImage = () => {
    return (
      <div className="settings-panel__item settings-panel__image">
        <span>BackgroundImage</span>
        <div className="settings-panel__image__block">
          <div className="settings-panel__image__block__bgimage">
            <img className="media-object" src={image} alt="bg-image" />
            <button
              className="settings-panel__items__btns__btn settings-panel__items__btns__btn--blue"
              onClick={() => dispatch(initImageMenu())}
            >
              Change
            </button>
          </div>
          <input value={image} onChange={(e) => handleImageInput(e)}></input>
        </div>
      </div>
    );
  };

  const bgColor = () => {
    return (
      <div ref={colorRef} className="settings-panel__item">
        {colorOpen ? (
          <HexColorPicker color={color} onChange={setColor} />
        ) : (
          <div className="settings-panel__bgcolor">
            <span>Background-color</span>
            <div className="bg-form">
              <input value={color} onChange={(e) => handleColorInput(e)} />
              <div
                className="bg-form__square"
                style={{ backgroundColor: color }}
                onClick={() => setColorOpen(true)}
              ></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="settings-panel__items">
      {bgImage()}
      {bgColor()}
    </div>
  );
};

export default ContainerDIVSettings;
