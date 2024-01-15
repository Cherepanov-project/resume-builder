import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from '@hookform/devtools';
import classes from './CvTemplate.module.scss';
import DemoCv from '../../components/organisms/DemoCv';
// import { temporaryCvDataSlice } from '../../assets/const';

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
import { useDispatch } from 'react-redux';

import { addAllPersonalInfo } from '../../store/cvTemplate/allPersonaInfoSlice';
// import { useAppSellector } from '../../hooks/cvTemplateHooks';

const validationSchema = yup.object().shape({
  'full-name': yup.string().required('Is a required field').min(3).max(20),
  'job-title': yup.string().required('Is a required field').min(3).max(20),
  address: yup.string().required('Is a required field').min(3).max(20),
  website: yup.string().required('Is a required field').url().nullable(),
  phone: yup
    .number()
    .typeError('Amount must be a number')
    .required('Please provide plan cost.')
    .min(0, 'Too little'),
  email: yup.string().required('Is a required field').email(),
  bio: yup.string().required('Is a required field'),

  education: yup
    .array()
    .of(
      yup.object().shape({
        study: yup.string().required('Is a required field'),
        degree: yup.string().required('Is a required field'),
        school: yup.string().required('Is a required field'),
        'education-from-year': yup.date().required('Is a required field'),
        'education-to-year': yup.date().required('Is a required field'),
      }),
    )
    .required(),

  experience: yup
    .array()
    .of(
      yup.object().shape({
        'work-title': yup.string().required('Is a required field'),
        company: yup.string().required('Is a required field'),
        'experience-from-year': yup.string().required('Is a required field'),
        'experience-to-year': yup.string().required('Is a required field'),
        'company-info': yup.string().required('Is a required field'),
      }),
    )
    .required(),

  social: yup.array().of(
    yup.object().shape({
      'social-name': yup.string().required('Is a required field'),
      'social-link': yup.string().required('Is a required field'),
    }),
  ),

  hobby: yup.array().of(
    yup.object().shape({
      label: yup.string().required('Is a required field'),
    }),
  ),
});

interface IFormInputs extends yup.InferType<typeof validationSchema> {}

const stepTitle = (title: string) => {
  return <Typography variant="h5">{title}</Typography>;
};

const stepContent = (element: JSX.Element) => {
  return element;
};

const CvTemplate = () => {
  const methods = useForm<IFormInputs>({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      'full-name': '',
      'job-title': '',
      address: '',
      bio: '',
      education: [
        {
          study: '',
          degree: '',
          school: '',
          'education-from-year': undefined,
          'education-to-year': undefined,
        },
      ],
      email: '',
      experience: [
        {
          'work-title': '',
          company: '',
          'experience-from-year': '',
          'experience-to-year': '',
          'company-info': '',
        },
      ],
      phone: undefined,
      hobby: [
        {
          label: '',
        },
      ],
      social: [
        {
          'social-name': '',
          'social-link': '',
        },
      ],
      website: '',
    },
  });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async () => {
    let isValid: boolean = false;

    switch (activeStep) {
      case 0:
        isValid = await methods.trigger([
          'full-name',
          'job-title',
          'address',
          'website',
          'phone',
          'email',
          'bio',
        ]);
        // isValid = true;
        break;

      case 1:
        isValid = await methods.trigger('education');
        break;

      case 2:
        isValid = await methods.trigger('experience');
        break;

      case 3:
        isValid = await methods.trigger('social');
        break;

      case 4:
        isValid = await methods.trigger(['hobby']);
        break;
    }

    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const steps = [
    {
      id: 1,
      label: stepTitle('Personal Info'),
      form: stepContent(<PersonalInfo />),
    },
    {
      id: 2,
      label: stepTitle('Education'),
      form: stepContent(<Education />),
    },
    {
      id: 3,
      label: stepTitle('Experience'),
      form: stepContent(<Experience />),
    },
    {
      id: 4,
      label: stepTitle('Social'),
      form: stepContent(<Social />),
    },
    {
      id: 5,
      label: stepTitle('Hobbies'),
      form: stepContent(<Hobbies />),
    },
  ];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const dispatch = useDispatch();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    const getFields = methods.getValues();
    console.log(getFields);

    handleNext();
    dispatch(addAllPersonalInfo(data));
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
                <Stepper
                  activeStep={activeStep}
                  orientation="vertical"
                  // onChange={async () => {
                  //   switch (activeStep) {
                  //     case 0:
                  //       await methods.trigger([
                  //         // 'full-name',
                  //         // 'job-title',
                  //         // 'address',
                  //         // 'website',
                  //         // 'phone',
                  //         // 'email',
                  //         // 'bio',
                  //       ]);
                  //       // isValid = true;
                  //       break;

                  //     case 1:
                  //       // await methods.trigger('education');
                  //       break;

                  //     case 2:
                  //       // await methods.trigger('experience');
                  //       break;

                  //     case 3:
                  //       // await methods.trigger('social');
                  //       break;

                  //     case 4:
                  //       // await methods.trigger(['hobby']);
                  //       break;
                  //   }
                  // }}
                >
                  {steps.map((step) => (
                    <Step key={step.id}>
                      <StepLabel>{step.label}</StepLabel>
                      <StepContent>
                        <Typography variant="body2" component={'span'}>
                          {step.form}
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

                {/* ПАНЕЛЬ РАЗРАБОТЧИКА ХУКФОРМ */}

                <DevTool control={methods.control} placement="top-left" />
              </FormProvider>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>All steps completed - you&apos;re finished</Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    AT FIRST
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
