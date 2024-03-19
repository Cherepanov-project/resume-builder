import React from 'react';
import { useState } from 'react';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { DevTool } from '@hookform/devtools';
import classes from './CvTemplate.module.scss';

import { buttonStyle } from '../../assets/style/buttonStyle';

import { Box } from '@mui/material';
import PersonalInfo from '../../components/organisms/PersonalInfo';
import Education from '../../components/organisms/Education';
import Experience from '../../components/organisms/Experience';
import Social from '../../components/organisms/Social';
import Hobbies from '../../components/organisms/Hobbies';
import PersonalPhoto from '../../components/organisms/PersonalPhoto';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';

import { addAllPersonalInfo } from '../../store/cvTemplate/allPersonaInfoSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import EditResumeTemplate from './EditResumeTemplate';
import FinishResume from './FinishResume';

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Is a required field').min(3).max(20),
  position: yup.string().required('Is a required field').min(3).max(20),
  address: yup.string().required('Is a required field').min(3),
  website: yup.string().required('Is a required field').url().nullable(),
  phone: yup
    .number()
    .typeError('Amount must be a number')
    .required('Please provide plan cost.')
    .min(0, 'Too little'),
  email: yup.string().required('Is a required field').email(),
  bio: yup.string().required('Is a required field'),

  educationData: yup
    .array()
    .of(
      yup.object().shape({
        study: yup.string().required('Is a required field'),
        degree: yup.string().required('Is a required field'),
        school: yup.string().required('Is a required field'),
        educationFromYear: yup.date().required('Is a required field'),
        'education-to-year': yup.date().required('Is a required field'),
      }),
    )
    .required(),

  experienceData: yup
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

  socialData: yup.array().of(
    yup.object().shape({
      'social-name': yup.string().required('Is a required field'),
      'social-link': yup.string().required('Is a required field'),
    }),
  ),

  hobbyData: yup.array().of(
    yup.object().shape({
      label: yup.string().required('Is a required field'),
    }),
  ),
});

interface IFormInputs extends yup.InferType<typeof validationSchema> {}

const CvTemplate = () => {
  const methods = useForm<IFormInputs>({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: 'Alex Ivanov',
      position: 'Team Lead',
      address: 'Russia',
      bio: 'Adept in creating a comprehensive and well-rounded curriculum that meets education requirements and standards. Experienced and passionate Early Childhood Teacher with a love for educating today youth.',
      email: 'qweqwen@inbox.ru',
      phone: 12313123,
      website: 'https://www.youtube.com/',

      educationData: [
        {
          study: 'qweqwe',
          degree: 'qweqwe',
          school: 'qweqwe',
          educationFromYear: undefined,
          'education-to-year': undefined,
        },
      ],

      experienceData: [
        {
          'work-title': 'qweqwe',
          company: 'qweqwewqe',
          'experience-from-year': undefined,
          'experience-to-year': undefined,
          'company-info':
            'Conducted comprehensive job analyses to update job descriptions and salary benchmarks, resulting in improved job satisfaction and equity',
        },
      ],

      hobbyData: [
        {
          label: 'asdasdsad',
        },
      ],
      socialData: [
        {
          'social-name': 'asdasd',
          'social-link': 'asdasdasd',
        },
      ],
    },
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async () => {
    let isValid: boolean = false;

    switch (activeStep) {
      case 0:
        isValid = await methods.trigger([
          'fullName',
          'position',
          'address',
          'website',
          'phone',
          'email',
          'bio',
        ]);
        break;

      case 1:
        isValid = await methods.trigger('educationData');
        break;

      case 2:
        isValid = await methods.trigger('experienceData');
        break;

      case 3:
        isValid = await methods.trigger('socialData');
        break;

      case 4:
        isValid = await methods.trigger(['hobbyData']);
        break;

      case 5:
        isValid = true;
        break;
    }

    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const steps = [
    {
      id: 1,
      label: <Typography variant="h5">Personal Info</Typography>,
      form: <PersonalInfo />,
      state: 'active',
    },
    {
      id: 2,
      label: <Typography variant="h5">Education</Typography>,
      form: <Education />,
      state: '',
    },
    {
      id: 3,
      label: <Typography variant="h5">Experience</Typography>,
      form: <Experience />,
      state: '',
    },
    {
      id: 4,
      label: <Typography variant="h5">Social</Typography>,
      form: <Social />,
      state: '',
    },
    {
      id: 5,
      label: <Typography variant="h5">Hobbies</Typography>,
      form: <Hobbies />,
      state: '',
    },
    {
      id: 6,
      label: <Typography variant="h5">Photo</Typography>,
      form: <PersonalPhoto />,
      state: '',
    },
  ];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = () => {
    setActiveStep(0);
  };

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const transformedData = {
      personalData: {
        fullName: data.fullName,
        address: data.address,
        bio: data.bio,
        position: data.position,
        phone: data.phone,
        website: data.website,
        email: data.email,
      },

      educationData: data.educationData.map((education) => ({
        description: education.study,
        position: education.degree,
        fromYear: new Date(education.educationFromYear).getFullYear(),
        toYear: new Date(education['education-to-year']).getFullYear(),
        name: education.school,
      })),

      experienceData: data.experienceData.map((experience) => ({
        position: experience['work-title'],
        fromYear: new Date(experience['experience-from-year']).getFullYear(),
        toYear: new Date(experience['experience-to-year']).getFullYear(),
        name: experience.company,
        description: experience['company-info'],
      })),

      socialData: data.socialData?.map((social) => ({
        link: social['social-link'],
        name: social['social-name'],
      })),

      hobbyData: data.hobbyData?.map((hobby) => ({
        hobby: hobby.label,
      })),
    };

    console.log('TRANSFORMED DATA', transformedData);
    dispatch(addAllPersonalInfo(transformedData));
    handleNext();
  };

  const getButtonStatus = (index: number) => {
    if (index === activeStep) {
      steps[index].state = 'active';
      return 'active';
    } else if (index < activeStep) {
      steps[index].state = 'done';
      return 'done';
    } else {
      steps[index].state = 'next';
      return 'next';
    }
  };

  const getButtonStyles = (index: number) => {
    const buttonStatus = getButtonStatus(index);

    return {
      color:
        buttonStatus === 'active'
          ? '#462174'
          : buttonStatus === 'done'
            ? 'white'
            : buttonStatus === 'next'
              ? '#4E4D4D'
              : 'initial',
      backgroundColor:
        buttonStatus === 'active'
          ? 'white'
          : buttonStatus === 'done'
            ? '#462174'
            : buttonStatus === 'next'
              ? '#dddbdb'
              : 'initial',
      border:
        buttonStatus === 'active'
          ? '2px solid #462174'
          : buttonStatus === 'done'
            ? '#462174'
            : buttonStatus === 'next'
              ? '2px solid #4E4D4D'
              : 'initial',
    };
  };
  const [showElement, setShowElement] = useState(false);

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowElement(!showElement);
  };

  return (
    <Box>
      <Box className={classes.cvTemlpate__header}>
        <Typography sx={{ mt: 6, ml: 8, fontSize: 32 }}>Resumo Resume Builder</Typography>
      </Box>
      {showElement ? (
        <EditResumeTemplate handleButtonClick={handleButtonClick} />
      ) : activeStep === 6 ? (
        <FinishResume handleReset={handleReset} handleButtonClick={handleButtonClick} />
      ) : (
        <Box>
          <FormProvider {...methods}>
            <Box className={classes.cvTemlpate__stepper}>
              <Box className={classes.cvTemlpate__step}>
                {steps.map((step, index) => (
                  <Button
                    disabled={false}
                    variant="contained"
                    style={getButtonStyles(index)}
                    sx={{
                      mt: 1,
                      mr: 1,
                      margin: '15px',
                      width: '322px',
                      height: '70px',
                    }}
                    key={step.id}
                    onClick={() => setActiveStep(step.id - 1)}
                  >
                    {step.label}
                  </Button>
                ))}
              </Box>
              {steps.map((step) => {
                if (step.state === 'active') {
                  return (
                    <Box component="form" className={classes.cvTemlpate__stepContent} key={step.id}>
                      <Typography
                        variant="caption"
                        className={classes.cvTemlpate__stepContentLabel}
                      >
                        {step.label}
                      </Typography>
                      {step.form}

                      <Box className={classes.cvTemlpate__stepContentButton}>
                        <Button
                          disabled={step.id === 1}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        />

                        <Button
                          onClick={
                            step.id === 6
                              ? methods.handleSubmit(onSubmit)
                              : () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
                          }
                          variant="contained"
                          sx={buttonStyle}
                        >
                          {step.id === 6 ? 'Finish' : 'Next session'}
                        </Button>
                      </Box>
                    </Box>
                  );
                }
              })}
            </Box>
            <DevTool control={methods.control} placement="top-left" />
          </FormProvider>
        </Box>
      )}
    </Box>
  );
};

export default CvTemplate;
