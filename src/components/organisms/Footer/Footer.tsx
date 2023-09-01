import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
          <ul className={`${classes.container} ${classes['footer-nav-container']}`}>
      <li className={classes['footer-nav-column']}>
        <h3 className={classes['footer-nav-title']}>Get started</h3>
        <ul className={classes['footer-link-list']}>
          <li className={classes['footer-link-list-item']}>Create Resume</li>
          <li className={classes['footer-link-list-item']}>Pricing</li>
          <li className={classes['footer-link-list-item']}>Terms of Service</li>
        </ul>
      </li>
      <li className={classes['footer-nav-column']}>
        <h3 className={classes['footer-nav-title']}>Reserved</h3>
        <ul className={classes['footer-link-list']}>
          <li className={classes['footer-link-list-item']}>Reserved</li>
        </ul>
      </li>
      <li className={classes['footer-nav-column']}>
        <h3 className={classes['footer-nav-title']}>Reserved</h3>
        <ul className={classes['footer-link-list']}>
          <li className={classes['footer-link-list-item']}>Reserved</li>
        </ul>
      </li>
    </ul>
      <div className={`${classes.container} ${classes["footer-copyright"]}`}>
        <span className={classes['footer-content']}>© 2023. All rights reserved.</span>
        <span className={classes['footer-content']}>Made with love by people who care.</span>
      </div>
    </footer>
  );
};

export default Footer;
