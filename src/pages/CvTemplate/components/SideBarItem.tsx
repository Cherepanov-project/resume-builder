import { Fragment } from 'react';
import { Box, Divider, Button } from '@mui/material';

import { Step } from '@pages/CvTemplate/utils/steps.tsx';
import { steps } from '../utils/index';
import { getButtonStyles } from '@pages/CvTemplate/utils';

import classes from '@pages/CvTemplate/CvTemplate.module.scss';

interface Props {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const SideBarItem: React.FC<Props> = ({ activeStep, setActiveStep }) => {
  return (
    <Box className={classes.cvTemlpate__step}>
      {steps.map((step: Step, index: number) => (
        <Fragment key={step.id}>
          <Button
            disabled={true}
            variant="contained"
            style={getButtonStyles(index, activeStep)}
            sx={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
            }}
            onClick={() => setActiveStep(step.id - 1)}
          >
            <step.icon sx={{ width: '35px', height: '35px' }} />
          </Button>
          {step.id !== 6 && (
            <Divider orientation="vertical" sx={{ width: '1px', height: '45px' }} />
          )}
        </Fragment>
      ))}
    </Box>
  );
};

export default SideBarItem;
