import React, { FC } from 'react';

import classes from './DefaultButton.module.scss';

interface IDefaultButtonProps {
  label?: string;
  primary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  float?: boolean;
}

const DefaultButton: FC<IDefaultButtonProps> = (props) => {
  const renderClasses = props.primary
    ? `${classes['default-button']} ${classes['default-button--primary']}`
    : props.float
    ? `${classes['default-button']} ${classes['default-button--float']}`
    : classes['default-button'];

  return (
    <button onClick={props.onClick} className={renderClasses} disabled={props.disabled}>
      {props.children} {props.label}
    </button>
  );
};

export default DefaultButton;
