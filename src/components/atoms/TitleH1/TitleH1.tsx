import { TitleH1Props } from '@/types/landingBuilder';

import classes from './TitleH1.module.scss';

const TitleH1: React.FC<TitleH1Props> = ({ props }) => {
  return <h1 className={classes['h1']}>{props.text || 'Заголовок Н1'}</h1>;
};

export default TitleH1;
