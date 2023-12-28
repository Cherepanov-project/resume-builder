import classes from './Footer.module.scss';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <article className={classes.social}>
        <a> CV Builder </a>
        <p className={classes['social-text']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque
          illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.
        </p>
        <ul className={classes.socialIcons}>
          <li>
            <a>
              <FacebookRoundedIcon />
            </a>
          </li>
          <li>
            <a>
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a>
              <GoogleIcon />
            </a>
          </li>
          <li>
            <a>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a>
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </article>
      <article className={classes.privacy}>
        <h2 className={classes['footer-title']}>PRIVACY & TOS</h2>
        <a>Advertiser Agreement</a>
        <a>Acceptable Use Policy</a>
        <a>Privacy Policy</a>
        <a>Technology Privacy</a>
        <a>Developer Agreement</a>
      </article>
      <article className={classes.navigate}>
        <h2 className={classes['footer-title']}>NAVIGATE</h2>
        <a>Advertisers</a>
        <a>Developers</a>
        <a>Resources</a>
        <a>Company</a>
        <a>Connect</a>
      </article>
      <article className={classes.contact}>
        <h2 className={classes['footer-title']}>CONTACT US</h2>
        <p className={classes['social-text']}>Mailing Address:xx00 E. Union Ave</p>
        <p className={classes['social-text']}>Suite 1100. Denver, CO 80237</p>
        <p className={classes['social-text']}>+999 90932 627</p>
        <p className={classes['social-text']}>support@yourdomain.com</p>
      </article>
    </footer>
  );
};

export default Footer;
