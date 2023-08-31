import React from 'react';
import classes from './CvTemplate.module.scss';
import DemoCv from '../../components/organisms/DemoCv';

import PersonalInfo from '../../components/organisms/PersonalInfo';
import Education from '../../components/organisms/Education';
import Experience from '../../components/organisms/Experience';

const CvTemplate = () => {
  return (
    <div className={classes.cvTemlpate}>
      <div className={classes.cvTemlpate__left}>
        <DemoCv />
      </div>
      <div className={classes.cvTemlpate__right}>
        <form action="">
          <PersonalInfo />
          <Education />
          <Experience />
        </form>
      </div>
    </div>
  );
};

export default CvTemplate;