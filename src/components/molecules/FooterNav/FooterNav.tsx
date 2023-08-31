import FooterNavLink from "../../atoms/FooterNavLink";
import FooterNavTitle from "../../atoms/FooterNavTitle";

import classes from "./FooterNav.module.scss"

const FooterNav = () => {
  return (
    <ul className={`${classes.container} ${classes['footer-nav-container']}`}>
      <li className={classes['footer-nav-column']}>
        <FooterNavTitle>Get started</FooterNavTitle>
        <ul className={classes['footer-link-list']}>
          <FooterNavLink>Create Resume</FooterNavLink>
          <FooterNavLink>Pricing</FooterNavLink>
          <FooterNavLink>Terms of Service</FooterNavLink>
        </ul>
      </li>
      <li className={classes['footer-nav-column']}>
        <FooterNavTitle>Reserved</FooterNavTitle>
        <ul className={classes['footer-link-list']}>
          <FooterNavLink>Reserved</FooterNavLink>
        </ul>
      </li>
      <li className={classes['footer-nav-column']}>
        <FooterNavTitle>Reserved</FooterNavTitle>
        <ul className={classes['footer-link-list']}>
          <FooterNavLink>Reserved</FooterNavLink>
        </ul>
      </li>
    </ul>
  )
}

export default FooterNav;