import { useAppDispatch, useTypedSelector } from '@/hooks/cvTemplateHooks';
import { setSectionStyle } from '@/store/landingBuilder/layoutSlice';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { nanoid } from 'nanoid';
import './LayoutBlockButtonSettings.scss';

export interface IProps {
  setStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
}


const LayoutBlockButtonSettings = ({ setStyle }: IProps) => {
  const dispatch = useAppDispatch();
  const [bgColor, setBGColor] = useState('#ffff');
  const [borderColor, setBorderColor] = useState('#000');
  const [bgColorOpen, setBgColorOpen] = useState(false);
  const [textColorOpen, setTextColorOpen] = useState(false);
  const [textColor, setTextColor] = useState('#000');
  const [borderColorOpen, setBorderColorOpen] = useState(false);
  const [text, setText] = useState('CLICK ME!');
  const [url, setUrl] = useState<string>('#');

  const colorRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (colorRef.current && !colorRef.current.contains(e.target as Node)) {
      setBgColorOpen(false);
    }
  };

  const { gridContainers } = useTypedSelector((state) => state.layout);
  const elements = gridContainers.find((el) =>
    el.elements.activeElements.filter((el) => el.name === 'RatingSystem'),
  );
  const layout = elements?.layout.i;

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    setStyle({
      backgroundColor: bgColor,
      border: `2px solid ${borderColor}`,
      color: textColor,
    });

    dispatch(
      setSectionStyle({
        i: layout,
        style: { backgroundColor: bgColor, border: `2px solid ${borderColor}`, color: textColor },
        text: text,
        url: url,
        wrapperStyle: { textAlign: 'center' },
        textStyle: { fontSize: '16px' },
        inputStyle: { width: '100%', height: '100%', border: 'none' },
      }),
    );
  }, [bgColor, borderColor, text, textColor, dispatch, layout, setStyle, url]);

  const handleBGColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBGColor(e.target.value);
  };

  const handleTextColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  const handleBorderColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderColor(e.target.value);
  };

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    if (e.target.value === '') {
      return setText('CLICK ME!');
    } else return;
  };


  const handUrlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);

    if (e.target.value === '') {
      return setText('#');
    }
  };

  const rateColor = () => {
    return (
      <div ref={colorRef} className="settings-panel__item">
        {bgColorOpen ? (
          <>
            <HexColorPicker color={bgColor} onChange={setBGColor} />
          </>
        ) : (
          <div
            style={{ flexDirection: 'column' }}
            id={nanoid()}
            className="settings-panel__bgcolor rating"
          >
            <span>set background color</span>
            <div className="bg-form">
              <input value={bgColor} onChange={(e) => handleBGColorInput(e)} />
              <div className="bg-form__square" onClick={() => setBgColorOpen(true)}></div>
            </div>
          </div>
        )}
        {textColorOpen ? (
          <>
            <HexColorPicker color={textColor} onChange={setTextColor} />
          </>
        ) : (
          <div
            style={{ flexDirection: 'column' }}
            id="flex"
            className="settings-panel__bgcolor rating"
          >
            <span>set text color</span>
            <div className="bg-form">
              <input value={textColor} onChange={(e) => handleTextColorInput(e)} />
              <div className="bg-form__square" onClick={() => setTextColorOpen(true)}></div>
            </div>
          </div>
        )}
        {borderColorOpen ? (
          <>
            <HexColorPicker color={borderColor} onChange={setBorderColor} />
          </>
        ) : (
          <div
            style={{ flexDirection: 'column' }}
            id="flex"
            className="settings-panel__bgcolor rating"
          >
            <span>set border color</span>
            <div className="bg-form">
              <input value={borderColor} onChange={(e) => handleBorderColorInput(e)} />
              <div className="bg-form__square" onClick={() => setBorderColorOpen(true)}></div>
            </div>
            <span>set text</span>
            <div className="text-form">
              <input
                placeholder={text === 'CLICK ME!' ? 'set text for button...' : text}
                onChange={(e) => handleTextInput(e)}
              />
            </div>

            <span>enter URL</span>
            <div className="text-form">
              <input
                placeholder={url === '#' ? 'set url for button...' : url}
                onChange={(e) => handUrlInput(e)}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return <div className="settings-panel__items">{rateColor()}</div>;
};

export default LayoutBlockButtonSettings;
