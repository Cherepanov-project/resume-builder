import { FC } from "react";

import classes from "./DefaultBurron.module.scss";

interface IDefaultButtonProps {
  label: string;
}

const DefaultButton: FC<IDefaultButtonProps> = (props) => {
  return <button className={classes["default-button"]}>{props.label}</button>;
};

export default DefaultButton;
