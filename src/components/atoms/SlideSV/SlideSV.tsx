import React from 'react';

import style from './SlideSV.module.scss';
export interface IslideSVProps {
  src: string;
}

const SlideSV: React.FC<IslideSVProps> = ({ src }) => {
  return (
    <div className={style.SlideSV}>
      <img src={src} alt="resume preview" className={style.SlideSVImage} />
    </div>
  );
};

export default SlideSV;
