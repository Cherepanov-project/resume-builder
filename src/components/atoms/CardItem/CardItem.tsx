import { ILayoutBlock } from '@/types/landingBuilder';
import { useState, useEffect } from 'react';

import styles from './CardItem.module.scss';

type StyleType = {
  [key: string]: string | number;
};

const CardItem: React.FC<ILayoutBlock> = ({ props }) => {
  const [stringFields, setStringFields] = useState<{[k: string]: string}>({
    title: props?.title || '',
    description: props?.description || '',
    buttonText: props?.buttonText || '',
    text: props?.text || '',
    url: props?.url || '',
    imgUrl: props?.imgUrl || '',
    });

  useEffect(() => {
    setStringFields(
      {
        title: props?.title || '',
        description: props?.description || '',
        buttonText: props?.buttonText || '',
        text: props?.text || '',
        url: props?.url || '',
        imgUrl: props?.imgUrl || '',
        }
    )
  }, [props]);

  const wrapperStyle: StyleType = {
    ...props?.wrapperStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    height: 'calc(100% - 37px)',
    flexDirection: 'column',
    backgroundSize: 'contain',
    width: 'auto',
    maxWidth: '250px',
    marginTop: '5px',
    marginBottom: '5px',
    backgroundRepeat: 'no-repeat',
  };

  const onButtonClick: (e: React.MouseEvent) => void = (e) => {
    e.preventDefault();
    window.location.href = stringFields.url;
  };

  const content = () => {
    return (
      <div style={props.style} className={styles[`cardItem`]}>
        {stringFields.imgUrl ? <img className={styles[`cardItem__img`]} src={stringFields.imgUrl} alt={stringFields.title} /> : null}
        <p className={styles[`cardItem__title`]}>{stringFields.title}</p>
        <p className={styles[`cardItem__description`]}>{stringFields.description}</p>
        <p className={styles[`cardItem__text`]}>{stringFields.text}</p>
        {stringFields.buttonText ? (
          <button className={styles[`cardItem__button`]} onClick={onButtonClick}>
            <span className={styles[`cardItem__buttonText`]}>{stringFields.buttonText}</span>
          </button>
        ) : null}
      </div>
    );
  };

  return (
    <div style={wrapperStyle}>
      {content()}
    </div>
  );
};

export default CardItem;
