import { ILayoutBlock } from '@/types/landingBuilder';
import { FC, useState, useEffect } from 'react';

const VideoPlayer: FC<ILayoutBlock> = ({ props }) => {
  const [url, setUrl] = useState<string>(props.url || props.text);

  useEffect(() => {
    setUrl(props.url || '');
  }, [props]);

  return (
    <iframe
      width="100%"
      height="90%"
      src={url || 'https://www.youtube.com/embed/JGckbtbQThM?si=e3aN0ObSkZ1WoHuE'}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
};

export default VideoPlayer;
