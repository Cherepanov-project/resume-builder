import classes from './TitleH1.module.scss';

const TitleH1 = ({ props }) => {
  return <h1 className={classes['h1']}>{props.title}</h1>;
};

export default TitleH1;
