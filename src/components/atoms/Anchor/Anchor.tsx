import { useEffect, useState } from 'react';

import './Anchor.module.scss';
import { ILayoutBlock } from '@/types/landingBuilder';

type StyleType = {
  [key: string]: string | number;
};

const Anchor: React.FC<ILayoutBlock> = ({ props }) => {
  const defaultFontSize = '30';

  const [text, setText] = useState<string>(props.text || '');
  const [url, setUrl] = useState<string>(props.url || '');
  const [fs, setFs] = useState<string | number>(props?.textStyle?.fontSize || defaultFontSize);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setText(props.text || '');
  }, [props]);

  const wrapperStyle: StyleType = {
    ...props.wrapperStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const handleText: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleUrl: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const url = e.target.value;
    setUrl(url);
  };

  const handleFontSize: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const fs = e.target.value;
    setFs(fs);
  };

  const handleDoubleClick: (e: React.MouseEvent) => void = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleKeyDown: (e: React.KeyboardEvent) => void = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const inputPannel = () => {
    return (
      <div className="anchor__input-pannel">
        <label>
          text:
          <input
            value={text}
            onChange={(e) => handleText(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          ></input>
        </label>
        <label>
          url:
          <input
            value={url}
            onChange={(e) => handleUrl(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          ></input>
        </label>
        <label>
          font-size:
          <input
            value={fs}
            onChange={(e) => handleFontSize(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          ></input>
        </label>
      </div>
    );
  };

  const content = () => {
    return (
      <a href={url} style={props.textStyle} onContextMenu={(e) => handleDoubleClick(e)}>
        {text}
      </a>
    );
  };

  return (
    <div style={{...props.style, ...wrapperStyle}}>
      {isEditing && inputPannel()}
      {!isEditing && content()}
    </div>
  );
};

export default Anchor;
