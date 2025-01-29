import { ILayoutBlock } from '@/types/landingBuilder';
import { useState, useEffect } from 'react';

type StyleType = {
  [key: string]: string | number;
};

const Logo: React.FC<ILayoutBlock> = ({ props }) => {
  const [stringFields, setStringFields] = useState<{[k: string]: string}>({
    text: props?.text || '',
    url: props?.url || '',
    imgUrl: props?.imgUrl || '',
    });

  useEffect(() => {
    setStringFields(
      {
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
    justifyContent: 'center',
    //height: 'calc(100% - 37px)',
    flexDirection: 'column',
    backgroundSize: 'contain',
    width: 'auto',
    backgroundRepeat: 'no-repeat',
  };

  console.log('stringFields в ЛОГО', stringFields);
  const content = () => {
    return (
      <a href={stringFields.url} style={{width: '130px', height: '130px', margin:'10px'}} >
        {stringFields.imgUrl ? <img src={stringFields.imgUrl} alt={stringFields.text}></img> : stringFields.text}
      </a>
    );
  };

  return (
    <div style={{...props.style, ...wrapperStyle}}>
      {content()}
    </div>
  );
};

export default Logo;
