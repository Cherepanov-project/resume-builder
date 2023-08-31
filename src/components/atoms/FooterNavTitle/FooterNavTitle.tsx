import { FC } from "react";

import classes from "./FooterNavTitle.module.scss"

interface IFooterNavTitleProps {
  children: string
}

const FooterNavTitle: FC<IFooterNavTitleProps> = (props) => {
  return <h3 className={classes['footer-nav-title']}>{props.children}</h3>
}

export default FooterNavTitle;