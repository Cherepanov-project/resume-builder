import { ILayoutBlock } from '@/types/landingBuilder';
import { FC, useState, useEffect } from 'react';

const LayoutBlockVideoPlayer: FC<ILayoutBlock> = ({ props }) => {
  const [url, setUrl] = useState<string>(props.text);

  useEffect(() => {
    setUrl(props.text);
  }, [props]);

  return (
    <iframe
      width="100%"
      height="90%"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
};

export default LayoutBlockVideoPlayer;
