import { FC } from "react";

import classes from "./FooterContent.module.scss"

interface IFooterContentProps {
  children: string
}

const FooterContent: FC<IFooterContentProps> = (props) => {
  return <span className={classes['footer-content']}>{props.children}</span>
}

export default FooterContent;