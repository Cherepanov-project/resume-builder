import { useAppDispatch, useTypedSelector } from '@/hooks/cvTemplateHooks';
import { setSectionStyle } from '@/store/landingBuilder/layoutSlice';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const LayoutBlockModalSettings = () => {
  const dispatch = useAppDispatch();

  const [bgColor, setBGColor] = useState('#ffff');
  const [borderColor, setBorderColor] = useState('#000');
  const [bgColorOpen, setBgColorOpen] = useState(false);
  const [textColorOpen, setTextColorOpen] = useState(false);
  const [textColor, setTextColor] = useState('#000');
  const [borderColorOpen, setBorderColorOpen] = useState(false);
  const [text, setText] = useState<string[]>([
    'Click here to open modal',
    'Here is your modal title',
    'Wow! You opened modal.',
  ]);
  const colorRef = useRef<HTMLDivElement>(null);

  const { gridContainers } = useTypedSelector((state) => state.layout);

  const elements = gridContainers.find((el) =>
    el.elements.activeElements.find((el) => el.name === 'ModalWindow'),
  );

  const layout = elements?.layout.i;

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // вывести в отдельную функцию
    dispatch(
      setSectionStyle({
        i: layout,
        style: { backgroundColor: bgColor, border: `2px solid ${borderColor}`, color: textColor },
        text: text,
        wrapperStyle: { textAlign: 'center' },
        textStyle: { fontSize: '16px' },
        inputStyle: { width: '100%', height: '100%', border: 'none' },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgColor, borderColor, text, textColor]);

  const handleBGColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBGColor(e.target.value);
  };

  const handleTextColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  const handleBorderColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderColor(e.target.value);
  };

  const handleModalTitleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      return;
    } else {
      setText((prev) => {
        const newArr = [...prev];
        newArr.splice(1, 1, e.target.value);
        return newArr;
      });
    }
  };

  const handleModalBodyTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      return;
    } else {
      setText((prev) => {
        const newArr = [...prev];
        newArr.splice(1, 2, e.target.value);
        return newArr;
      });
    }
  };

  const handleClick = (e: MouseEvent) => {
    if (colorRef.current && !colorRef.current.contains(e.target as Node)) {
      setBgColorOpen(false);
      setBorderColorOpen(false);
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
            id="flex"
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
            <span>set modal title text</span>
            <div className="text-form">
              <input placeholder={''} onChange={(e) => handleModalTitleTextInput(e)} />
            </div>
            <span>set modal body text</span>
            <div className="text-form">
              <input placeholder={''} onChange={(e) => handleModalBodyTextInput(e)} />
            </div>
          </div>
        )}
      </div>
    );
  };

  return <div className="settings-panel__items">{rateColor()}</div>;
};

export default LayoutBlockModalSettings;
