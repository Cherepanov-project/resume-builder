import { FC } from "react";

import classes from "./DefaultButton.module.scss";

interface IDefaultButtonProps {
  label: string;
  primary?: boolean;
  disabled? : boolean;
}

const DefaultButton: FC<IDefaultButtonProps> = (props) => {
  const renderClasses = props.primary
    ? `${classes["default-button"]} ${classes["default-button--primary"]}`
    : classes["default-button"];

  return <button className={renderClasses} disabled={props.disabled}>{props.label}</button>;
};

export default DefaultButton;
