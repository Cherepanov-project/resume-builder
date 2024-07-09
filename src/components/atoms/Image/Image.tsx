import { ILayoutBlock } from '@/types/landingBuilder';
import { useState, FC, useEffect, useRef } from 'react';
import classes from './Image.module.scss';

const Image: FC<ILayoutBlock> = ({ props }) => {
  const [url, setUrl] = useState<string>(props.url || '');
  const imageRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.url) setUrl(props.url);
  }, [props.url]);

  useEffect(() => {
    if (imageRef.current && wrapperRef.current) {
      resizeImage();
      window.addEventListener('resize', resizeImage);
    }
    return () => {
      window.removeEventListener('resize', resizeImage);
    };
  }, [url]);

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const resizeImage = () => {
    const image = imageRef.current;
    const wrapper = wrapperRef.current;
    if (image && wrapper) {
      const wrapperHeight = wrapper.clientHeight;
      const imageAspectRatio = image.naturalWidth / image.naturalHeight;
      const wrapperAspectRatio = wrapper.clientWidth / wrapperHeight;

      if (imageAspectRatio > wrapperAspectRatio) {
        image.style.width = '100%';
        image.style.height = 'auto';
      } else {
        image.style.width = 'auto';
        image.style.height = '100%';
      }
    }
  };

  return (
    <div
      className={classes.wrapper}
      onContextMenu={handleDoubleClick}
      ref={wrapperRef}
    >
      {<img className={classes.image} ref={imageRef} src={url || props.text} alt="Dynamic content" onLoad={resizeImage} />}
    </div>
  );
};

export default Image;
