import MonetizationOnIcon from '@mui/icons-material/MonetizationOn.js';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import classes from './WelcomeArea.module.scss';

export const WelcomeArea = () => {
  return (
    <div className="container-1200">
      <section className={classes['welcome-area']}>
        <div className={classes.monetization}>
          <MonetizationOnIcon color="success" /> Discover The Easiest ways to Build Your CV!
        </div>
        <div className={classes['animation-wrapper']}>
          <h1>
            Online CV Builder With <br />
            CreativeTemplates.
          </h1>
          <Typography className={classes.text}>
            Our Perfect resume builder takes the hassle out <br /> of resume writing. Choose from
            several templates and follow <br /> easy prompts to create the perfect
            <br />
            job-ready resume.
          </Typography>

          <div className={classes['btn-wrapper']}>
            <Button variant="contained" color="primary">
              choose template
            </Button>
            <Button variant="contained" color="primary">
              contact us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
