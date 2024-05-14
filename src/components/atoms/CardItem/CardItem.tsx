import { ILayoutBlock } from '@/types/landingBuilder';
import { useState, useEffect } from 'react';

import styles from './CardItem.module.scss';

type StyleType = {
  [key: string]: string | number;
};

const CardItem: React.FC<ILayoutBlock> = ({ props }) => {
  const [title, setTitle] = useState<string>(props?.title || '');
  const [description, setDescription] = useState<string>(props?.description || '');
  const [buttonText, setButtonText] = useState<string>(props?.buttonText || '');
  const [text, setText] = useState<string>(props?.text || '');
  const [url, setUrl] = useState<string>(props?.url || '');
  const [imgUrl, setImgUrl] = useState<string>(props?.imgUrl || '');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setText(props?.text || '');
    setUrl(props?.url || '');
    setImgUrl(props?.imgUrl || '');
    setTitle(props?.title || '');
    setDescription(props?.description || '');
    setButtonText(props?.buttonText || '');
  }, [props]);

  const wrapperStyle: StyleType = {
    ...props?.wrapperStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
    backgroundSize: 'contain',
    width: 'auto',
    maxWidth: '250px',
    marginTop: '5px',
    marginBottom: '5px',
    backgroundRepeat: 'no-repeat',
  };

  const handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleDescription: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleText: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleUrl: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const url = e.target.value;
    setUrl(url);
  };

  const handleButtonText: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const buttonText = e.target.value;
    setButtonText(buttonText);
  };

  const onButtonClick: (e: React.MouseEvent) => void = (e) => {
    e.preventDefault();
    window.location.href = url;
  };

  const handleImgUrl: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const imgUrl = e.target.value;
    setImgUrl(imgUrl);
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
          title:
          <input
            value={title}
            onChange={(e) => handleTitle(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          ></input>
        </label>
        <label>
          description:
          <input
            value={description}
            onChange={(e) => handleDescription(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          ></input>
        </label>
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
          button text:
          <input
            value={buttonText}
            onChange={(e) => handleButtonText(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          ></input>
        </label>
        <label>
          image url:
          <input
            value={imgUrl}
            onChange={(e) => handleImgUrl(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          ></input>
        </label>
      </div>
    );
  };

  const content = () => {
    return (
      <div className={styles[`cardItem`]} onContextMenu={(e) => handleDoubleClick(e)}>
        {imgUrl ? <img className={styles[`cardItem__img`]} src={imgUrl} alt={title} /> : null}
        <p className={styles[`cardItem__title`]}>{title}</p>
        <p className={styles[`cardItem__description`]}>{description}</p>
        <p className={styles[`cardItem__text`]}>{text}</p>
        {buttonText ? (
          <button className={styles[`cardItem__button`]} onClick={onButtonClick}>
            {buttonText}
          </button>
        ) : null}
      </div>
    );
  };

  return (
    <div style={wrapperStyle}>
      {isEditing && inputPannel()}
      {!isEditing && content()}
    </div>
  );
};

export default CardItem;
