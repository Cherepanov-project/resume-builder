import React from 'react';
import classes from './DemoCv.module.scss';
import demoImage from '../../../assets/images/demo-cv-1.png';

const DemoCv = () => {
  return (
    <div className={classes.DemoCv}>
      <img src={demoImage} alt="demo" />
    </div>
  );
};

export default DemoCv;
