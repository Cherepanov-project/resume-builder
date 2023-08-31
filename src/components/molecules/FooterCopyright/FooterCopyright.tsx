import FooterContent from "../../atoms/FooterContent";

import classes from "./FooterCopyright.module.scss"

const FooterCopyright = () => {
  return (
    <div className={`${classes.container} ${classes['footer-copyright']}`}>
      <FooterContent>© 2023. All rights reserved.</FooterContent>
      <FooterContent>Made with love by people who care.</FooterContent>
    </div>
  );
};

export default FooterCopyright;
