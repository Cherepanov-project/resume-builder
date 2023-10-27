import React from 'react';
import classes from './CvTemplate.module.scss';
import DemoCv from '../../components/organisms/DemoCv';

import PersonalInfo from '../../components/organisms/PersonalInfo';
import Education from '../../components/organisms/Education';
import Experience from '../../components/organisms/Experience';
import Social from '../../components/organisms/Social';
import Hobbies from '../../components/organisms/Hobbies';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const stepTitle = (title: string) => {
  return <Typography variant="h5">{title}</Typography>;
};

const stepContent = (element: JSX.Element) => {
  return element;
};

const steps = [
  {
    label: stepTitle('Personal Info'),
    description: stepContent(<PersonalInfo />),
  },
  {
    label: stepTitle('Education'),
    description: stepContent(<Education />),
  },
  {
    label: stepTitle('Experience'),
    description: stepContent(<Experience />),
  },
  {
    label: stepTitle('Social'),
    description: stepContent(<Social />),
  },
  {
    label: stepTitle('Hobbies'),
    description: stepContent(<Hobbies />),
  },
];

const CvTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className={classes.cvTemlpate}>
      <Box className={classes.cvTemlpate__container}>
        <Box className={classes.cvTemlpate__content}>
          <Box className={classes.cvTemlpate__left}>
            <Box className={classes.cvTemlpate__demoCv}>
              <DemoCv />
            </Box>
          </Box>
          <Box className={classes.cvTemlpate__rightWrapper}>
            <Box className={classes.cvTemlpate__right}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{step.label}</StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                          </Button>
                          <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>All steps completed - you&apos;re finished</Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <div className={classes.cvTemlpate__right}>
        <form action="">
          <PersonalInfo />
          <Education />
          <Experience />
          <Social />
          <Hobbies />
        </form>
      </div>
    </Box>
  );
};

export default CvTemplate;
