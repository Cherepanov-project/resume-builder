import { FC } from "react";

import classes from "./FooterNavLink.module.scss"

interface IFooterNavLinkProps {
  children: string
}

const FooterNavLink: FC<IFooterNavLinkProps> = (props) => {
  return <li className={classes['footer-link-list-item']}>{props.children}</li>
}

export default FooterNavLink;