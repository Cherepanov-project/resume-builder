import { ILayoutBlock } from '@/types/landingBuilder';
import { useState, useEffect } from 'react';

type StyleType = {
  [key: string]: string | number;
};

const Logo: React.FC<ILayoutBlock> = ({ props }) => {
  const [text, setText] = useState<string>(props?.text || '');
  const [url, setUrl] = useState<string>(props?.url || '');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setText(props?.text || '');
    setUrl(props?.url || '');
  }, [props]);

  const wrapperStyle: StyleType = {
    ...props?.wrapperStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
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

  const handleKeyDown: (e: React.KeyboardEvent) => void = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleDoubleClick: (e: React.MouseEvent) => void = (e) => {
    e.preventDefault();
    setIsEditing(true);
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
        {/* <label>
          font-size:
          <input
            value={fs}
            onChange={(e) => handleFontSize(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          ></input>
        </label> */}
      </div>
    );
  };

  const content = () => {
    return (
      <a href={url} onContextMenu={(e) => handleDoubleClick(e)}>
        {text}
      </a>
    );
  };

  return (
    <div style={wrapperStyle}>
      {isEditing && inputPannel()}
      {!isEditing && content()}
    </div>
  );
};

export default Logo;
