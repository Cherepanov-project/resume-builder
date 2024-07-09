import classes from './AdvertisementSection.module.scss';

import DecorativeCircle from '@atoms/DecorativeCircle';
import SupportContainer from '@molecules/SupportContainer';
import { Box } from '@mui/material';

const AdvertisementSection = () => {

  return (
    <Box className={classes.right_side}>
      <DecorativeCircle />
      <SupportContainer />
      {/* <div className={classes.rs_content}>
        <div className={classes.rs_content__card}>
          <div className={classes.rs_content__card_large}>
            <div>
              <span className={classes.rs_content__card_large__title}>
                Reach financial goals faster
              </span>
              <p className={classes.rs_content__card_large__text}>
                Use your Venus card around the world with no hidden fees. Hold, transfer and spend
                money.
              </p>
              <button
                className={`${classes.rs_content__card_large__button} ${classes.btn}`}
                onClick={nothing}
              >
                Learn more
              </button>
            </div>
          </div>
          <div className={classes.rs_content__card_small}>
            <BarChartTwoToneIcon />
            <div className={classes.rs_content__card_small__inner}>
              <p>Earnings</p>
              <h2>$350.40</h2>
            </div>
          </div>
        </div>
        <div className={classes.rs_content__new_features}>
          <h2>Introducing new features</h2>
          <p>
            Analyzing previous trends ensures that businesses always make the right decision. And as
            the scale of the decision and it's impact magnifies...
          </p>
          <div className={classes.rs_navigation}>
            <ArrowBackIosNewTwoToneIcon style={{ fontSize: 'small' }} />
            <FiberManualRecordTwoToneIcon style={{ fontSize: 'small' }} />
            <CircularProgress
              variant="determinate"
              size={12}
              style={{ backgroundColor: 'grey', borderRadius: '50%', color: 'white' }}
              value={77}
            />
            <FiberManualRecordTwoToneIcon style={{ fontSize: 'small' }} />
            <ArrowForwardIosNewTwoToneIcon style={{ fontSize: 'small' }} />
          </div>
        </div>
      </div> */}
    </Box>
  );
};

export default AdvertisementSection;
