import React from 'react';
import classes from './CvTemplate.module.scss';
import DemoCv from '../../components/organisms/DemoCv';

import PersonalInfo from '../../components/organisms/PersonalInfo';

const CvTemplate = () => {
  return (
    <div className={classes.cvTemlpate}>
      <div className={classes.cvTemlpate__left}>
        <DemoCv />
      </div>
      <div className={classes.cvTemlpate__right}>
        <form action="">
          <PersonalInfo />
        </form>
      </div>
    </div>
  );
};

export default CvTemplate;
