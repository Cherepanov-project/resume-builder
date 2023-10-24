import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from '@hookform/devtools';
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

const validationSchema = yup.object().shape({
  'full-name': yup.string(),
  'job-title': yup.string(),
  address: yup.string(),
  website: yup.string(),
  phone: yup.string(),
  bio: yup.string(),
  study: yup.string(),
  degree: yup.string(),
  school: yup.string(),
  educationFromYear: yup.string(),
  educationToYear: yup.string(),
  'work-title': yup.string(),
  company: yup.string(),
  experienceFromYear: yup.string(),
  experienceToYear: yup.string(),
  'company-info': yup.string(),
  'social-link': yup.string(),
  'social-name': yup.string(),
  hobby: yup.string(),
});

interface IformInputs extends yup.InferType<typeof validationSchema> {}

const stepTitle = (title: string) => {
  return <Typography variant="h5">{title}</Typography>;
};

const stepContent = (element: JSX.Element) => {
  return element;
};

const CvTemplate = () => {
  const methods = useForm<IformInputs>({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const steps = [
    {
      id: 1,
      label: stepTitle('Personal Info'),
      description: stepContent(<PersonalInfo />),
    },
    {
      id: 2,
      label: stepTitle('Education'),
      description: stepContent(<Education />),
    },
    {
      id: 3,
      label: stepTitle('Experience'),
      description: stepContent(<Experience />),
    },
    {
      id: 4,
      label: stepTitle('Social'),
      description: stepContent(<Social />),
    },
    {
      id: 5,
      label: stepTitle('Hobbies'),
      description: stepContent(<Hobbies />),
    },
  ];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Не даёт сделать коммит так как тип ANY запрещён
  // const fields = useMemo(() => Object.keys(validationSchema.fields), []);
  // useEffect(()=> {

  //   fields.forEach((field:) => methods.setValue(field, ''))
  // }, [])

  const onSubmit = (data: IformInputs) => {
    console.log(data);
    const getFields = methods.getValues();
    console.log(getFields);
    handleNext();
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
              <FormProvider {...methods}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step) => (
                    <Step key={step.id}>
                      <StepLabel>{step.label}</StepLabel>
                      <StepContent>
                        <Typography variant="body2" component={'span'}>
                          {step.description}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              onClick={
                                step.id === 5 ? methods.handleSubmit(onSubmit) : () => handleNext()
                              }
                              variant="contained"
                              sx={{ mt: 1, mr: 1 }}
                            >
                              {step.id === 5 ? 'Finish' : 'Continue'}
                            </Button>
                            <Button
                              disabled={step.id === 1}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Back
                            </Button>
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                <DevTool control={methods.control} placement="top-left" />
              </FormProvider>
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
    </Box>
  );
};

export default CvTemplate;
