import FooterCopyright from "../../molecules/FooterCopyright";
import FooterNav from "../../molecules/FooterNav";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <FooterNav />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;