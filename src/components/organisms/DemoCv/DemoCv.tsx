import classes from './DemoCv.module.scss';
import demoImage from '../../../assets/images/demo-cv.png';

const DemoCv = () => {
  return (
    <div className={classes.demoCv}>
      <img className={classes.demoCv__image} src={demoImage} alt="demo" />
    </div>
  );
};

export default DemoCv;
