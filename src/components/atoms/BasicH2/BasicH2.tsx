import React from 'react';
import classes from './BasicH2.module.scss';
import { IBasicH2_Text } from '../../../types';

const BasicH2: React.FC<IBasicH2_Text> = ({ text }) => {
  return <h2 className={classes.basicH2}>{text}</h2>;
};

export default BasicH2;
